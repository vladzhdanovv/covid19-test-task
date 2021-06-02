import React from "react";
import {Table} from "react-bootstrap";

const TableView = ({items}) => (
    <>
        {
            items.length ?
                (
                    <Table>
                        <thead>
                        <tr>
                            <th>
                                Date
                            </th>
                            <th>
                                Confirmed Cases
                            </th>
                            <th>
                                New Cases
                            </th>
                            <th>
                                Deaths
                            </th>
                            <th>
                                New Deaths
                            </th>
                            <th>
                                Active Cases
                            </th>
                            <th>
                                Recovered Cases
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            items.map((item, key) => (
                                <tr key={key}>
                                    <td>
                                        {item.Date}
                                    </td>
                                    <td>
                                        {item.Confirmed}
                                    </td>
                                    <td>
                                        {item.NewCases}
                                    </td>
                                    <td>
                                        {item.Deaths}
                                    </td>
                                    <td>
                                        {item.NewDeaths}
                                    </td>
                                    <td>
                                        {item.Active}
                                    </td>
                                    <td>
                                        {item.Recovered}
                                    </td>
                                </tr>
                            ))
                        }
                        <tr>
                            <td>

                            </td>
                        </tr>
                        </tbody>
                    </Table>
                ) :
                <span className={'text-center'}>
                        Oops! No data... Please try a bit later
                    </span>
        }
    </>
)

export default TableView;
