import React from 'react';
import "./chart.css";

export default function Chart({ label, isDisplaying, currentYear, currentMonth, currentDay, origin }) {

    const getStyle = () => {
        //scale 0.5 for height and width
        return isDisplaying ? { 
            backgroundImage: `url('/images/${origin}/${currentYear}/${currentMonth}/${currentDay}/${label}.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "917.5px",
            height: "424.5px",
        } : { display: "none" }
    }

    const getTextClassName = () => {
        let defaultClass = isDisplaying ? "chart-name" : "chart-name display-none";
        return defaultClass;
    }

    return <div className="chart">
        <p className={getTextClassName()}>{label}</p>
        <div style={{...getStyle()}}></div>
    </div>
}