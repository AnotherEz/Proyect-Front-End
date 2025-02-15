import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api"; // Cambia esto según tu backend

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // Necesario para Sanctum
});
 
export default api;
