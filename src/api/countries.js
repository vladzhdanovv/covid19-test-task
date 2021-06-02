import http from '../utils/http';
import _ from 'lodash';

export const getCountries = () => {
    return http.get('/countries')
        .then(response => response.data);
}

// This API endpoint returns all data for each day, so it can multiply the data per day
export const getCountryBySlug = (slug) => {
    return http.get(`/live/country/${slug}/status/confirmed?from=2020-03-01T00:00:00Z&to=${new Date().toISOString()}`)
        .then(response => response.data || [])
        .then(items => {

            return _.uniqBy(items, 'Date')
                .map((item, i, arr) => {
                    const prev = arr[i - 1];
                    const prevConfirmed = prev ? prev.Confirmed : 0;
                    const prevDeaths = prev ? prev.Deaths : 0;
                    return {
                        ...item,
                        NewCases: prev ? Math.abs(item.Confirmed - prevConfirmed) : 0,
                        NewDeaths: prev ? Math.abs(item.Deaths - prevDeaths) : 0,
                    }
                })
                .reverse();
        });
}
