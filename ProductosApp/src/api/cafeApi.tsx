import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//const baseURL = 'http://localhost:8080/api';
const baseURL = 'https://raphy-cafe-rn.herokuapp.com/api'
const cafeApi = axios.create({ baseURL });

// Axios Middleware
cafeApi.interceptors.request.use(
    async (config : any) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
)


export default cafeApi;