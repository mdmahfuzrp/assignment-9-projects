import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
  import './Statistics.css'
  

const Statistics = () => {
    const data = [
        {
            "id": 1,
            "mark": 60,
            "Assignment": 1
        },
        {
            "id": 2,
            "mark": 60,
            "Assignment": 2
        },
        {
            "id": 3,
            "mark": 60,
            "Assignment": 3
        },
        {
            "id": 4,
            "mark": 48,
            "Assignment": 4
        },
        {
            "id": 5,
            "mark": 60,
            "Assignment": 5
        },
        {
            "id": 6,
            "mark": 57,
            "Assignment": 6
        },
        {
            "id": 7,
            "mark": 60,
            "Assignment": 7
        },
        {
            "id": 8,
            "mark": 60,
            "Assignment": 8
        }
    ];
    return (

        <div id='chart-parent'>

            <div id="chart-container" style={{ width: '100%', height: 400 }}>
                <ResponsiveContainer id="chart" width="80%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        width={1000}
                        height={1000}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="Assignment" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Area dataKey="mark" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="mark" barSize={20} fill="#413ea0" />
                        <Line dataKey="mark" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;