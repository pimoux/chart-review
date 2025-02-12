import React from 'react';
import './timeFrameFilterList.css';
import TimeFrameFilterItem from '../TimeFrameFilterItem/TimeFrameFilterItem';

export default function TimeFrameFilterList({ isM1enabled, isM5enabled, isM15enabled, isH1enabled, setIsM1enabled, setIsM5enabled, setIsM15enabled, setIsH1enabled }) {
    const properties = [
        {
            timeFrame: isM1enabled,
            setTimeFrame: setIsM1enabled,
            label: "M1",
        },
        {
            timeFrame: isM5enabled,
            setTimeFrame: setIsM5enabled,
            label: "M5",
        },
        {
            timeFrame: isM15enabled,
            setTimeFrame: setIsM15enabled,
            label: "M15",
        },
        {
            timeFrame: isH1enabled,
            setTimeFrame: setIsH1enabled,
            label: "H1",
        },
    ]
    return <div className="timeframe-filter">
        <h2 className='timeframe-title'>TIMEFRAME FILTER</h2>
        <div className="timeframe-checkboxes">
            {properties.map((item, i) => {
                return <TimeFrameFilterItem key={i} timeFrame={item.timeFrame} label={item.label} setTimeFrame={item.setTimeFrame} />
            })}
        </div>
    </div>
}