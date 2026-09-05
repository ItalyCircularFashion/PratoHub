# PratoHub — Forum della Moda

**PratoHub** is the platform dedicated to the Prato textile district: spinning mills, weaving, dyeing, finishing, packaging, certifications, innovation, sustainability, fashion news, events, textile processing, business opportunities, and territory information.

Built as a vanilla JavaScript single-page application with Vite bundling, deployed to GitHub Pages.

---

## Tech Stack

- **Vanilla JavaScript (ES modules)** — No frameworks, no dependencies at runtime
- **Vite** — Build tooling and dev server
- **GitHub Actions** — CI/CD pipeline for automatic deployment
- **GitHub Pages** — Static hosting

## Architecture

```
├── assets/               # Static assets (images, og-cover)
├── data/                 # Seed data (articles, discussions, questions, events, etc.)
├── models/               # Entity factories (User, Article, Discussion, etc.)
├── services/             # Business logic (auth, session, market, navigation, etc.)
├── components/           # UI components (comment, gallery, poll, share, etc.)
├── renderers/            # Card renderers (centralized DOM building)
├── utils/                # Utilities (format, validation)
├── permissions/          # Permission model (RBAC)
├── auth/                 # Authentication service (mock)
├── *.html                # Page templates
├── main.js               # Single entry point (imports all modules)
└── vite.config.js        # Build configuration
```

### Key Design Decisions

- **Single entry point** — `main.js` imports and initializes everything
- **Modular ES modules** — Each file exports exactly what it owns
- **Centralized rendering** — All card markup lives in `renderers/card.renderer.js`
- **Permission-aware UI** — RBAC with 5 roles (Guest → Member → Expert → Moderator → Admin)
- **Mock services** — Auth, session, and market data are easily swappable with real APIs

## Development

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Push to `main` branch triggers GitHub Actions workflow:

1. `npm ci` — Install dependencies
2. `npm run build` — Bundle with Vite
3. `actions/deploy-pages` — Deploy `dist/` to GitHub Pages

## License

MIT License — see [LICENSE](LICENSE) for details.

## Contributing

This is a platform for the Prato textile community. Contributions welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Live site:** [https://italycircularfashion.github.io/PratoHub/](https://italycircularfashion.github.io/PratoHub/)
