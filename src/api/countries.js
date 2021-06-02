import http from '../utils/http';

export const getCountries = () => {
    return http.get('/countries')
        .then(response => response.data);
}

export const getCountryBySlug = (slug) => {
    return http.get(`/live/country/${slug}/status/confirmed?from=2020-03-01T00:00:00Z&to=${new Date().toISOString()}`)
        .then(response => response.data || [])
        .then(items => {
            return items
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
