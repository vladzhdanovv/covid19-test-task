import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL || 'https://api.covid19api.com'
})

export default client;
