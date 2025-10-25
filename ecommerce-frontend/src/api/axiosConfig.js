import axios from "axios";

// Use the Vite environment variable VITE_API_BASE when provided.
// In development the Vite dev server proxy can be used, but for
// production we need an absolute backend URL. You can set VITE_API_BASE
// in your Render (or other) environment variables to the backend URL.
const defaultBackend = "https://ecommerce-project-backend-n78t.onrender.com";
const baseURL = import.meta.env.VITE_API_BASE || defaultBackend;

axios.defaults.baseURL = baseURL;

export default axios;
