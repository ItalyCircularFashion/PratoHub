/* ============================================================
   AUTH SERVICE (mock)
   auth/auth.js
   This is a STAND-IN for real authentication.
   ============================================================ */
import { ROLES } from './permissions.js';
import { createUser } from './user.model.js';

// Preset identities — one per role
const MOCK_USERS = {
  guest: null,
  member: createUser({
    id: 'u-201', nickname: 'elena.tessile', email: 'elena@example.com',
    role: ROLES.MEMBER, professionalRole: 'Production Planner', country: 'Italy',
    expertise: ['Supply Chain', 'ERP'], avatarUrl: 'https://picsum.photos/seed/memberava/120/120',
    reputation: 340, badges: [], profileComplete: true,
  }),
  expert: createUser({
    id: 'u-104', nickname: 'renzo.galli', email: 'renzo@example.com',
    role: ROLES.EXPERT, verifiedExpert: true, professionalRole: 'Textile Engineer, 22 yrs',
    country: 'Italy', expertise: ['Textile Engineering', 'Quality Control'],
    avatarUrl: 'https://picsum.photos/seed/expertava/120/120', reputation: 3120,
    badges: ['Verified Expert'], profileComplete: true,
  }),
  moderator: createUser({
    id: 'u-55', nickname: 'mod.alice', email: 'alice@example.com',
    role: ROLES.MODERATOR, professionalRole: 'Community Moderator', country: 'Italy',
    avatarUrl: 'https://picsum.photos/seed/modava/120/120', reputation: 1800,
    badges: ['Moderator'], profileComplete: true,
  }),
  admin: createUser({
    id: 'u-1', nickname: 'editorial.desk', email: 'desk@forumdellamoda.com',
    role: ROLES.ADMIN, professionalRole: 'Editorial Desk', country: 'Italy',
    avatarUrl: 'https://picsum.photos/seed/adminava/120/120', reputation: 9999,
    badges: ['Administrator'], profileComplete: true,
  }),
};

let currentUser = null;

function getCurrentUser(){ return currentUser; }
function isAuthenticated(){ return !!currentUser; }
function login(user){
  currentUser = user || null;
  document.dispatchEvent(new CustomEvent('fdm:authchange', { detail: { user: currentUser } }));
}
function logout(){ login(null); }
function setMockUser(key){ login(MOCK_USERS[key] || null); }

export const auth = { getCurrentUser, isAuthenticated, login, logout, setMockUser, setCurrentUser: login, MOCK_USERS };
