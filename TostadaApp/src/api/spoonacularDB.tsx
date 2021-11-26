// Centraliza todas las peticiones
import axios from 'axios';

const spoonacularDB = axios.create({
    baseURL: 'https://api.spoonacular.com',
    params: {
        apiKey: 'be1890b082b0417fa0adc46fc4801592',
    }
});

export default spoonacularDB;
