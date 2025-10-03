import { OpenAPI } from "../api";

OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;

// Export here required API services so that environmental variable VITE_API_BASE_URL is taken into consideration.
export { MonitoringService } from "../api";
