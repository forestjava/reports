import { QueryClient } from 'react-query'
import { ui } from '../states';
import { EmergencyAPI } from "./EmergencyAPI";
import { LegalAPI } from "./LegalAPI";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      keepPreviousData: true, // to use previous fetched data while fetching new
      onError: (error: unknown) => {
        ui.errors.push(error)
      }
    }
  }
})

const INSTEAD: boolean = import.meta.env.VITE_USE_INSTEAD! == "True";

export const API = INSTEAD ? EmergencyAPI : LegalAPI;

console.log('using VITE_BACKEND_API_ROUTE', API.BACKEND_API_ROUTE)