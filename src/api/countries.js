import http from '../utils/http';

export const getCountries = () => {
    return http.get('/countries')
        .then(response => response.data);
}
