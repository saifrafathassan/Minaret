import axios from 'axios';
import { Api } from './Consts';
// Create an Axios instance
const api = axios.create({
    baseURL:Api,  // Base URL for your API
    timeout: 40000,  // Timeout for requests (optional)
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor to handle errors globally (optional)
api.interceptors.response.use(
    response => response,
    error => {
        // Handle global errors here (like logging, alerting the user, etc.)
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default api;