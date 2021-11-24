// Centraliza todas las peticiones
import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '16355e183648e4bff5a919dd4a618c33',
        language: 'en-US'
    }
});


export default movieDB;
