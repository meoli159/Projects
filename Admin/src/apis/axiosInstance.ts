import axios from 'axios';

// Define the base URL for the server API
const SERVER_API: string = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:3333';

// Create an Axios instance with the base URL
export const axiosClient = axios.create({ baseURL: SERVER_API });
