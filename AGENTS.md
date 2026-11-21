# Project Architecture Rules
- Keep page-specific content in the existing route modules and shared navigation/footer in `src/components`, so the established routes and checkout boundaries remain stable.
- Manage route-specific titles, descriptions, canonicals, and page schemas through one route-aware Helmet head in `src/App.tsx`, while keeping sitewide metadata and Organization schema in `index.html`.
