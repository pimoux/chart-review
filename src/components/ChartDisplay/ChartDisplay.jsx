import React from 'react';
import "./chartDisplay.css";
import Chart from '../Chart/Chart';

export default function ChartDisplay({ isM1enabled, isM5enabled, isM15enabled, isH1enabled, currentYear, currentMonth, currentDay, origin }) {
    const timeframes = [
        {
            label: "M1",
            attribute: isM1enabled,
        },
        {
            label: "M5",
            attribute: isM5enabled,
        },
        {
            label: "M15",
            attribute: isM15enabled,
        },
        {
            label: "H1",
            attribute: isH1enabled,
        },
    ]
    return (
        <div className="chart-display">
            <h2 className='chart-display-title'>CHART DISPLAY</h2>
            <div className='charts'>
                {timeframes.map((item, i) => {
                    return <Chart key={item.label} origin={origin} label={item.label} isDisplaying={item.attribute} currentYear={currentYear} currentMonth={currentMonth} currentDay={currentDay} />
                })}
            </div>
        </div>
    );
}