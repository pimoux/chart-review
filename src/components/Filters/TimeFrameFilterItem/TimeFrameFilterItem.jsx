import React from 'react';
import './timeFrameFilterItem.css';

export default function TimeFrameFilterItem({ timeFrame, label, setTimeFrame }) {
    return (
        <div className='timeframe-checkbox'>
            <label htmlFor={`checkbox-${label}`} className="timeframe-label">{label}</label>
            <input id={`checkbox-${label}`} name={`checkbox-${label}`} type="checkbox" checked={timeFrame} onClick={() => setTimeFrame(!timeFrame)} onChange={() => { }} />
        </div>
    );
}