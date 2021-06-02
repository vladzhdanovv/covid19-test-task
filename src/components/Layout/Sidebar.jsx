import React, {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {getCountries} from '../../api/countries'
const Sidebar = () => {
    const [countries, setCountries] = useState([]);

    useEffect(async () => {
        const countries = await getCountries()
        setCountries(countries);
    }, []);

    return (
        <aside style={{minHeight: `calc(100vh - 50px)`, borderRight: '1px solid black', padding: '15px'}}>
            <Nav className="flex-column">
                {
                    countries.map(country => {
                        return (
                            <Nav.Item>
                                <Link to={`${country.Slug}`}>
                                    { country.Country}
                                </Link>
                            </Nav.Item>
                        )
                    })
                }
            </Nav>
        </aside>
    )
}

export default Sidebar;
