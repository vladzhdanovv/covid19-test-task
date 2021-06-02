import React, {useMemo} from "react";
import { Chart } from 'react-charts'
import moment from 'moment';

const ChartView = ({items}) => {
    const dailyData = useMemo(() => {
        return [
            {
                label: 'New Cases',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.NewDeaths)
                    }
                })
            },
            {
                label: 'New Deaths',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.NewCases)
                    }
                })
            }
        ]
    }, [items]);
    const accumulatedData = useMemo(() => {
        return [
            {
                label: 'Deaths',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.Deaths)
                    }
                })
            },
            {
                label: 'Confirmed',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.Confirmed)
                    }
                })
            },
            {
                label: 'Recovered',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.Recovered)
                    }
                })
            },
            {
                label: 'Active',
                data: items.map(item => {
                    return {
                        x: moment(item.Date).utc(),
                        y: Number(item.Active)
                    }
                })
            }
        ]
    }, [items]);

    const axes = useMemo(
        () => [
            {
                primary: true,
                type: 'utc',
                position: 'bottom'
            },
            {
                type: 'linear',
                position: 'left'
            }
        ],
        []
    )

    return (
        <>
            <h5>Daily Chart</h5>
            <div style={{width: '100%', height: '450px'}}>
                <Chart data={dailyData} axes={axes} tooltip />
            </div>

            <h5>Accumulated Chart</h5>
            <div style={{width: '100%', height: '450px'}}>
                <Chart data={accumulatedData} axes={axes} tooltip />
            </div>
        </>
    )
}

export default ChartView;
