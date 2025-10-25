# Deployment Guide for Ecommerce Project

## Quick Reference

### Frontend Deployment (Render)

1. Push your changes to GitHub:

```bash
git add .
git commit -m "your commit message"
git push
```

2. In Render Dashboard (frontend service):

   - Go to Environment → Add Environment Variable
   - Add: `VITE_API_BASE` = `https://ecommerce-project-backend-n78t.onrender.com`
   - Click "Save Changes"
   - Click "Manual Deploy" → "Deploy latest commit"

3. Verify deployment:
   - Wait for build to complete
   - Open frontend URL
   - Check browser console for API requests going to backend URL
   - Test a product loads and cart works

### Backend Deployment (Render)

- Backend is already configured with:
  - Auto-deploys on push to main branch
  - CORS enabled for all origins
  - PORT set automatically by Render
  - Serves static files from `/images`

## Troubleshooting

### Frontend Shows Blank Page / No Data

1. Check browser console for errors
2. Verify in Network tab that API requests go to:
   `https://ecommerce-project-backend-n78t.onrender.com/api/...`
3. If requests go to frontend URL instead:
   - Check VITE_API_BASE is set in Render
   - Trigger a new deployment
   - Clear browser cache and reload

### CORS Errors

1. Backend already has `app.use(cors())` enabled
2. If seeing CORS errors:
   - Verify backend URL is exactly as shown above
   - Check for any proxy settings in `vite.config.js`
   - Ensure no trailing slash in VITE_API_BASE

### API 404 Errors

1. Test backend directly:
   ```bash
   curl https://ecommerce-project-backend-n78t.onrender.com/api/products
   ```
2. Check Render logs for backend service
3. Verify backend is running and not in sleep mode

## Local Development

1. Frontend (ecommerce-frontend/):

   ```bash
   npm install
   npm run dev
   ```

2. Backend (ecommerce-backend/):
   ```bash
   npm install
   npm run dev
   ```

## Exact Configuration Files and Contents

### 1. Environment Variables Setup

Create these files in your frontend folder (`ecommerce-frontend/`):

**`.env`** (for local development):

```properties
VITE_API_BASE=https://ecommerce-project-backend-n78t.onrender.com
```

**`.env.production`** (for production build):

```properties
VITE_API_BASE=https://ecommerce-project-backend-n78t.onrender.com
```

### 2. Vite Configuration

Update `ecommerce-frontend/vite.config.js`:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ecommerce-project-backend-n78t.onrender.com",
        changeOrigin: true,
        secure: false,
      },
      "/images": {
        target: "https://ecommerce-project-backend-n78t.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
```

### 3. Axios Configuration

Create/update `ecommerce-frontend/src/api/axiosConfig.js`:

```javascript
import axios from "axios";

// Use the Vite environment variable VITE_API_BASE when provided.
// In development the Vite dev server proxy can be used, but for
// production we need an absolute backend URL.
const defaultBackend = "https://ecommerce-project-backend-n78t.onrender.com";
const baseURL = import.meta.env.VITE_API_BASE || defaultBackend;

axios.defaults.baseURL = baseURL;

export default axios;
```

### 4. Main Entry Point

Update `ecommerce-frontend/src/main.jsx` to import the axios config:

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Configure global axios base URL for production builds
import "./api/axiosConfig";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

## File Location Quick Reference

```
ecommerce-frontend/
├── .env                     # Local development environment variables
├── .env.production         # Production environment variables
├── vite.config.js         # Vite and development proxy configuration
├── src/
│   ├── main.jsx          # Main entry point with axios import
│   └── api/
│       └── axiosConfig.js # Axios base URL configuration
```

## Environment Variables Reference

Frontend (Render):

```
VITE_API_BASE=https://ecommerce-project-backend-n78t.onrender.com
```

Backend (Render):

- `PORT` - Set automatically by Render
- No additional env vars required unless adding database

## Common Tasks

### Updating Backend URL

1. Update in Render environment variables
2. Update in local `.env` and `.env.production`
3. Redeploy frontend

### Adding New API Routes

1. Add route in backend
2. Deploy backend changes
3. Test locally with proxy
4. Deploy frontend with updated API calls
