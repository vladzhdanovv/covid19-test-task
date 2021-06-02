import React, {useEffect, useState} from 'react';
import {getCountryBySlug} from "../api/countries";
import {useParams} from 'react-router-dom';
import TableView from "../components/CompanyDetails/TableView";
import ChartView from "../components/CompanyDetails/ChartView";
import {Col, Row, Form} from "react-bootstrap";

const VIEW_MODE_TABLE = 1;
const VIEW_MODE_CHART = 2;

const CountryDetails = () => {
    const [stats, setStats] = useState({});
    const [country, setCountry] = useState('');
    const [viewMode, setViewMode] = useState(VIEW_MODE_TABLE);
    const { slug } = useParams();

    const handleChange = (e) => {
        setViewMode(e.target.checked ? VIEW_MODE_CHART : VIEW_MODE_TABLE);
    }
    useEffect(() => {
        if(!slug) return;
        getCountryBySlug(slug)
            .then(stats => {
                if(stats.length) setCountry(stats[0].Country)
                setStats(stats);
            })
    }, [slug]);

    return (
        <>
            <br/>
            <Row>
                <Col>
                    <h3>{country}</h3>
                </Col>
                <Col sm={2}>
                    <Form.Check
                        value={viewMode === VIEW_MODE_CHART}
                        onChange={handleChange}
                        type="switch"
                        id="custom-switch"
                        label={`${viewMode === VIEW_MODE_TABLE ? 'Enable' : 'Disable'} chart view`}
                    />
                </Col>
            </Row>
            <br/>
            {
                viewMode === VIEW_MODE_TABLE ?
                    <TableView items={stats} /> :
                    <ChartView items={stats} />
            }

        </>
    )
}

export default CountryDetails;
