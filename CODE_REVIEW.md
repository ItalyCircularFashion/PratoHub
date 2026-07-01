# PratoHub Code Review & Issues Report

**Date:** July 1, 2026  
**Status:** Initial Review - Multiple Issues Identified  
**Priority:** High - Several blocking issues preventing full functionality

---

## Critical Issues

### 1. **Missing Data and Incomplete Implementations** 🔴
**Severity:** CRITICAL  
**File:** `home.js` (Line 31)

```javascript
// CURRENT (BROKEN):
{tags:["Textile Engineering","Quality Control"], q:"How do you set acceptable defect tolerance for jacquard weaving?", expert:"Renzo Galli", role:"Textile Engineer, 22 yrs", seed:"exp1", accepte[...]
```

**Problem:** The questions array item is **truncated/corrupted**. The line ends with `accepte[...]` instead of `accepted: true` or `accepted: false`.

**Impact:** Will cause parsing errors when rendering question cards, breaking the questions section.

**Fix:**
```javascript
// FIXED:
{tags:["Textile Engineering","Quality Control"], q:"How do you set acceptable defect tolerance for jacquard weaving?", expert:"Renzo Galli", role:"Textile Engineer, 22 yrs", seed:"exp1", accepted:true},
{tags:["Supply Chain","Fashion Law"], q:"What actually changes in contracts once a supplier is GOTS certified?", expert:"Marta Sani", role:"Compliance Lead", seed:"exp2", accepted:true},
{tags:["Pattern Making"], q:"Best approach for grading a fitted blazer across 8 sizes?", expert:"Luca De Luca", role:"Pattern Maker", seed:"exp3", accepted:false},
{tags:["Manufacturing","Materials"], q:"Ring-spun vs open-end yarn — when does the cost difference matter?", expert:"Federica Costa", role:"Production Planner", seed:"exp4", accepted:true},
```

---

### 2. **Missing Function References** 🔴
**Severity:** CRITICAL  
**Files:** Multiple (article.js, home.js, card.renderer.js)

**Problem:** The following functions are called but never defined:
- `renderErrorState()` - Called in `article.js:14`
- `renderAuthorCard()` - Called in `article.js:34`
- `renderStatStrip()` - Called in `article.js:40`
- `renderAgendaCard()` - Called in `home.js:49` (exists in card.renderer.js ✓)
- `renderNewsCard()` - Called in `home.js:50` (exists in card.renderer.js ✓)
- `fullCard()` - Called in `article.js:83` (NOT DEFINED)
- `renderEventCard()` - Called in `home.js:53` (exists in card.renderer.js ✓)
- `renderPick()` - Called in `home.js:54` (exists in card.renderer.js ✓)
- `mountMarketGrid()` - Called in `home.js:55` (NOT DEFINED)

**Impact:** Runtime errors when those pages load. The app will fail to render entire sections.

**Fix:** 
1. Ensure all card.renderer.js functions are loaded before calling pages
2. Define missing utility functions or import them from correct modules
3. Check script loading order in HTML

---

### 3. **Inconsistent Data Structure Usage** 🟠
**Severity:** HIGH  
**Files:** `card.renderer.js:46-94` (renderDiscussionRow)

**Problem:** Function handles two different data shapes (legacy array vs Discussion model), but logic is brittle:
- Line 47: `if(Array.isArray(item))` - legacy support works
- But full Discussion object usage assumes FDM.components and FDM.session exist globally
- If those aren't initialized before the function runs, it will silently fail

```javascript
// Risky assumption on line 71:
const roleBadge = (author && FDM.components) ? FDM.components.renderRoleBadge(author) : '';
```

**Impact:** Role badges may not render. Permission checks may fail silently.

**Fix:**
```javascript
function renderDiscussionRow(item, author){
  if(Array.isArray(item)){
    // Legacy shape — output unchanged
    const [cat,title,votes,replies,avs] = item;
    return el(`...`);
  }
  
  // Validation for full Discussion model
  if(!item || typeof item !== 'object') {
    console.error('Invalid discussion item:', item);
    return el('<div class="disc-row"></div>');
  }
  
  const badges = [
    item.isPinned && '<span class="tag">Pinned</span>',
    item.acceptedAnswerId && '<span class="tag" style="color:var(--mkt-pos);">Solved</span>',
    item.moderationStatus === 'locked' && '<span class="tag">Locked</span>',
  ].filter(Boolean).join(' ');
  
  // Better guard for optional services
  const roleBadge = (author && FDM.components && FDM.components.renderRoleBadge) 
    ? FDM.components.renderRoleBadge(author) 
    : '';
  
  // Check if FDM.session exists before using it
  const user = FDM.auth?.getCurrentUser?.();
  const following = user && FDM.session && FDM.permissions.canFollow(user) 
    && FDM.session.isFollowing('discussion', item.id);
  
  // ... rest of function
}
```

---

## High Priority Issues

### 4. **Incomplete Script Loading Order** 🟠
**Severity:** HIGH  
**File:** `index.html:315-340`

**Problem:** Scripts are loaded in order, but there's no error handling if any fail to load. Also, some required utilities may not be defined:

```html
<!-- Current: No error handling, no async -->
<script src="user.model.js"></script>
<script src="discussion.model.js"></script>
<script src="article.model.js"></script>
<!-- ... 35 scripts total -->
<script src="home.js"></script>
```

**Issues:**
- If any script fails to load, subsequent scripts that depend on it will fail silently
- No module bundling (loading 40+ individual files is slow)
- No error boundary or fallback

**Impact:** Slow page load. Silent failures. Hard to debug.

**Recommendations:**
1. Use Vite (already in package.json) to bundle scripts
2. Add error handling around global initialization
3. Consider dynamic imports for optional features

**Example fix:**
```html
<script type="module">
  // Load and initialize core modules
  const modules = [
    'user.model.js',
    'discussion.model.js',
    'article.model.js',
    // ... etc
  ];
  
  Promise.all(modules.map(m => import(m)))
    .catch(err => {
      console.error('Failed to load modules:', err);
      document.body.innerHTML = '<div>Failed to load application</div>';
    });
</script>
```

---

### 5. **Missing Global Variable Initialization** 🟠
**Severity:** HIGH  
**Files:** Multiple (auth.js, ui.js, etc.)

**Problem:** Many files assume `FDM` global object exists and has specific properties, but initialization order is unclear:

```javascript
// auth.js, line 22:
const ROLES = FDM.permissions.ROLES;  // Assumes permissions.js loaded first!

// ui.js, line 24:
const { can, isAtLeast, label, ROLES } = FDM.permissions;  // Same dependency
```

**Risk:** If `permissions.js` doesn't load before `auth.js`, we get: `Cannot read property 'ROLES' of undefined`

**Fix:** Add defensive checks:
```javascript
// auth.js - Better initialization:
(function(){
  // Wait for permissions to be defined
  if(!FDM.permissions) {
    console.error('auth.js: FDM.permissions not initialized');
    return;
  }
  
  const ROLES = FDM.permissions.ROLES;
  // ... rest of code
})();
```

---

### 6. **Undefined Market Data** 🟠
**Severity:** HIGH  
**File:** `home.js:55`

```javascript
// Line 55:
mountMarketGrid('marketGrid', commodities);  // 'commodities' is NOT defined!
```

**Problem:** `commodities` variable is never defined in the file or imported.

**Impact:** Market grid won't render. Runtime error: `commodities is not defined`

**Fix:**
```javascript
// Import or define commodities data
const commodities = [
  { name: 'Cotton', price: 0.72, change: +0.5 },
  { name: 'Polyester', price: 1.24, change: -0.2 },
  { name: 'Wool', price: 1.89, change: +1.1 },
  // ... add all commodity data
];

mountMarketGrid('marketGrid', commodities);
```

---

## Medium Priority Issues

### 7. **Missing Implementations (Stub Functions)** 🟡
**Severity:** MEDIUM  
**Files:** `card.renderer.js`, `market.service.js`

**Undefined or incomplete functions:**
- `mountMarketGrid()` - Called but not defined
- `renderTimeline()` - Called in article.js:91 but not in card.renderer.js
- `FDM.session.isFollowing()` - Called but session service incomplete
- `FDM.utils.formatRelativeTime()` - Assumed to exist
- `FDM.utils.formatDate()` - Assumed to exist
- `FDM.utils.formatCompactNumber()` - Assumed to exist

**Fix:** Create/complete `format.js`:
```javascript
FDM.utils = FDM.utils || {};

FDM.utils.formatRelativeTime = function(date) {
  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - d) / 1000);
  
  if (seconds < 60) return 'just now';
  if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
  if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
  if (seconds < 604800) return Math.floor(seconds / 86400) + 'd ago';
  
  return d.toLocaleDateString();
};

FDM.utils.formatDate = function(date) {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

FDM.utils.formatCompactNumber = function(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toString();
};
```

---

### 8. **Missing Service Implementations** 🟡
**Severity:** MEDIUM  
**Files:** `market.service.js`, `session.service.js`

**Problem:** These services are called but may not be fully implemented:

```javascript
// Needs implementation:
FDM.marketService.getMarketData()
FDM.marketService.getMarketSummary()
FDM.session.isFollowing()
FDM.session.getVoteState()
FDM.commentService.getCommentsFor()
FDM.commentService.mountThreadFor()
```

**Fix:** Ensure each service has complete method signatures.

---

### 9. **Missing CSS Classes** 🟡
**Severity:** MEDIUM  
**File:** Likely `main.css`

**Classes referenced but may not exist:**
- `.folio`, `.folio-inner`, `.folio-mark`, `.folio-line`
- `.ticker-head`, `.ticker-dot`, `.ticker-label`
- `.role-badge`, `.role-badge--member`, `.role-badge--expert`, etc.
- `.dev-role-switcher`, `.drs-label`

**Recommendation:** Audit main.css to ensure all referenced classes exist.

---

## Low Priority Issues

### 10. **Security & Best Practices** 🟡
**Severity:** LOW (But important for production)

**Issues in `card.renderer.js:62`:**
```javascript
// Line 62: innerHTML with user-generated content
return el(`
  <div class="disc-row" data-title="${item.title.toLowerCase()}" ...>
```

If `item.title` contains malicious content, it could be vulnerable to XSS.

**Fix:** Use text content where possible:
```javascript
const div = document.createElement('div');
div.className = 'disc-row';
div.setAttribute('data-title', item.title.toLowerCase()); // Safe
div.textContent = item.title; // Escaped automatically
```

---

## Deployment Blockers

Before deploying to production, fix **Critical Issues** (#1-3) and **High Priority** (#4-6).

### Build Checklist:
- [ ] Fix truncated data in `home.js:31`
- [ ] Define all missing functions (renderErrorState, renderAuthorCard, etc.)
- [ ] Fix data structure inconsistencies
- [ ] Complete service implementations
- [ ] Bundle with Vite (not shipping 40+ individual files)
- [ ] Add error boundaries and fallback UI
- [ ] Audit CSS classes
- [ ] Test all pages load without console errors

---

## Summary

| Priority | Count | Files | Status |
|----------|-------|-------|--------|
| 🔴 Critical | 3 | home.js, article.js, card.renderer.js | **MUST FIX** |
| 🟠 High | 4 | index.html, auth.js, ui.js, home.js | **FIX BEFORE LAUNCH** |
| 🟡 Medium | 2 | Multiple | Fix soon |
| ⚪ Low | 1 | card.renderer.js | Improve for production |

**Status:** Site is **not production-ready**. Multiple core features will fail to load.

