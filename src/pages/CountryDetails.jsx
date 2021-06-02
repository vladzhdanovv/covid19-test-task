import React, {useEffect, useState} from 'react';
import {getCountryBySlug} from "../api/countries";
import {useParams} from 'react-router-dom';
import TableView from "../components/CompanyDetails/TableView";

const CountryDetails = () => {
    const [stats, setStats] = useState({});
    const [country, setCountry] = useState('');
    const { slug } = useParams();

    useEffect(async () => {
        if(!slug) return;
        const stats = await getCountryBySlug(slug)
        setStats(stats);
        if(stats.length) setCountry(stats[0].Country)
    }, [slug]);

    return (
        <>
            <h3>{country}</h3>
            <TableView items={stats} />
        </>
    )
}

export default CountryDetails;
