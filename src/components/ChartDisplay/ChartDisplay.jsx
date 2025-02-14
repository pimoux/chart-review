import React from 'react';
import "./chartDisplay.css";
import Chart from '../Chart/Chart';

export default function ChartDisplay({ isM1enabled, isM5enabled, isM15enabled, isH1enabled, isNQenabled, isESenabled, currentYear, currentMonth, currentDay, origin }) {
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
            {origin === "americanIndices" &&
                <div className='chart-display-american-indices-title'>
                    <h2>NASDAQ 100</h2>
                    <h2>S&P 500</h2>
                </div>
            }
            <div className='charts'>
                {timeframes.map((item) => {
                    return <Chart
                        key={item.label}
                        origin={origin} label={item.label} isDisplaying={item.attribute}
                        currentYear={currentYear} currentMonth={currentMonth} currentDay={currentDay}
                        isNQenabled={isNQenabled} isESenabled={isESenabled}
                    />
                })}
            </div>
        </div>
    );
}