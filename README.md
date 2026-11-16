# White-Label Local Retail & Compliance Web Template

A config-driven React web application designed for age-restricted local retail storefronts. Built to drive local foot traffic, showcase weekly inventory, and capture customer product requests without relying on prohibited e-commerce payment gateways.

## Key Engineering Features
- **Config-Driven White-Label Architecture (`src/config/shopConfig.js`):** Centralizes branding, store hours, location deep-links, inventory categories, and API endpoints so the entire application can be rebranded for a new client in minutes.
- **21+ Compliance Gate (`AgeGate.jsx`):** Blocks storefront access until age verification is confirmed, persisting validation state via `sessionStorage` to prevent friction across page reloads.
- **Dynamic Store-Hours Engine (`Hero.jsx` & `Footer.jsx`):** Evaluates the visitor's local day and time against the shop's weekly schedule to render real-time **Open Now / Currently Closed** indicators and highlight active business hours.
- **Filterable In-Store Inventory (`Catalog.jsx`):** Category-filtered product showcase featuring live stock badges (`In Stock` / `Low Stock`) and resilient image fallbacks.
- **Serverless Product Request Pipeline (`ProductRequest.jsx`):** Captures customer restock requests and routes submissions directly to store management via Formspree.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Icons:** Lucide React
- **Deployment & CI/CD:** GitHub + Vercel