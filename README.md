# CodeByDurvesh — Ecommerce Project

A simple example ecommerce application built with a Node/Express backend and a React + Vite frontend. It demonstrates product browsing, search, cart/checkout flows, order listing, and a small API that serves product/order/cart data.

## Table of contents

- Features
- Tech stack
- Getting started (development)
  - Prerequisites
  - Backend (API)
  - Frontend (Client)
- Scripts
- Tests
- Project conventions & data
- Deployment notes
- Contributing
- License

## Features

- Product listing and product detail display
- Search and filtering support via query string
- Cart UI with quantity tracking
- Checkout page and basic order summary
- Orders page showing placed orders
- Small Express API providing products, cart, delivery options, and orders
- Unit tests for selected frontend utilities and components (Vitest + Testing Library)

## Tech stack

- Frontend: React 19, React Router, Vite, Axios, Day.js
- Backend: Node.js, Express
- Dev/test: ESLint, Vitest, Testing Library, Nodemon (backend)

## Getting started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v8+/latest)
- Git (to clone the repo)

Open two terminals — one for the backend and one for the frontend.

### Backend (API)

1. Change into the backend folder:

```powershell
cd "ecommerce-backend"
```

2. Install dependencies:

```powershell
npm install
```

3. Start in development mode (auto-restarts on change):

```powershell
npm run dev
```

The backend listens on the port configured in `server.js` (check that file for the exact port; default is commonly 3000 or 4000). The API serves endpoints for products, cart, orders, and delivery options under routes in `routes/`.

### Frontend (Client)

1. Change into the frontend folder:

```powershell
cd "ecommerce-frontend"
```

2. Install dependencies:

```powershell
npm install
```

3. Run the dev server:

```powershell
npm run dev
```

This uses Vite and will open a dev server (usually at http://localhost:5173). The app uses React Router for navigation.

If your backend runs on a different port, update any API base URLs used by the frontend (look for axios calls or an API util).

## Scripts

Frontend (`ecommerce-frontend/package.json`):

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production bundle
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint

Backend (`ecommerce-backend/package.json`):

- `npm start` — Start server (`node server.js`)
- `npm run dev` — Start server with `nodemon` for development
- `npm run zip` — Run `zipFiles.js` to create zip archives (helper)
- `postinstall` uses `patch-package` (see repo `patches/`)

## Tests

- Frontend uses Vitest + Testing Library for unit tests. Run tests in the frontend folder:

```powershell
cd "ecommerce-frontend"
npm install
npm run test  # if test script exists; otherwise use `npx vitest` or `npm exec vitest`
```

(There are a few tests present such as `money.test.js` and component tests.)

## Project conventions & data

- The backend currently reads/writes demo data from JSON files in `backend/`. Check `defaultData/` for initial seed values.
- Models in `models/` are small JS wrappers used by routes and are not full ORM models unless you configure Sequelize.
- Routes are grouped by feature (`products.js`, `orders.js`, `cartItems.js`, etc.) under `routes/`.

## Deployment notes

- Frontend: Build with `npm run build` inside `ecommerce-frontend` and serve the `dist/` with any static hosting (Netlify, Vercel, GitHub Pages with an adapter, or a static server).
- Backend: Deploy `ecommerce-backend` with Node hosting (Heroku, Render, Railway, VPS). Ensure environment variables and persistent storage are configured if you replace the JSON files with a real DB.

## Security & caveats

- This project is a learning/demo app — not production hardened.
- No authentication is included by default. Do not store secrets in plain files.
- If you integrate a real DB or payment gateway, secure credentials and add proper validation.

## Troubleshooting

- If the frontend cannot reach the backend, confirm backend port and update any API base URLs.
- If ESLint or tests fail, run `npm install` in the corresponding package folder and ensure Node version matches repo expectations.

## Contact / Author

- Author: CodeByDurvesh
- Repo maintained for learning and demo purposes.
- Contact: codebydurvesh.com@gmail.com / durvesh.gaikwad08@gmail.com
