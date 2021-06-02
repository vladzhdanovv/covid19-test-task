import React, {useCallback, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Form, FormControl, InputGroup, Nav} from "react-bootstrap";
import {getCountries} from '../../api/countries';

const Sidebar = () => {
    const [all, setAll] = useState([]);
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(async () => {
        const countries = await getCountries()
        setAll(countries);
    }, []);

    useEffect(async () => {
        const filtered = all.filter(item => item.Country.startsWith(query));
        setCountries(filtered);
    }, [all, query])

    return (
        <aside style={{minHeight: `calc(100vh - 50px)`, borderRight: '1px solid black', padding: '15px'}}>
            <Nav className="flex-column">
                <Form>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Enter name"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <InputGroup.Append style={{cursor: 'pointer'}} onClick={() => setQuery('')}>
                            <InputGroup.Text>
                                <span>⎌</span>
                            </InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <br/>
                {
                    countries.map((country, key) => {
                        return (
                            <Nav.Item key={key}>
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
