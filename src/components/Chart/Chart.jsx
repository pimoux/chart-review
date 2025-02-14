import React from 'react';
import "./chart.css";

export default function Chart({ label, isDisplaying, currentYear, currentMonth, currentDay, origin, isNQenabled, isESenabled }) {

    const getStyleEurUsd = () => {
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

    const getStyleAmericanIndices = (isIndiceEnabled) => {
        const isDisplaying = isIndiceEnabled === "NQ" ? isNQenabled : isESenabled;
        const completedLabel = isIndiceEnabled === "NQ" ? `NQ${label}` : `ES${label}`;

        return isDisplaying ? {
            backgroundImage: `url('/images/${origin}/${currentYear}/${currentMonth}/${currentDay}/${completedLabel}.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "800px",
            height: "370.1px",
        } : { display: "none" }
    }

    return origin === "eurusd" ? (
        <div className="chart-euro">
            <p className={getTextClassName()}>{label}</p>
            <div style={{ ...getStyleEurUsd() }}></div>
        </div>
    ) : (
        <div className="chart-american-indices">
            <p className={getTextClassName()}>{label}</p>
            <div className="american-charts">
                <div style={{ ...getStyleAmericanIndices("NQ") }}></div>
                <div style={{ ...getStyleAmericanIndices("ES") }}></div>
            </div>
        </div>
    )
}