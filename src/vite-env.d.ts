/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_BACKEND_API_ROUTE: string
  VITE_USE_INSTEAD?: "True" | "False"
  VITE_BACKEND_API_ROUTE_INSTEAD?: string
  VITE_ADMIN_SECRET?: string
  // more env variables...
}