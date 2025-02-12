import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import TimeFrameFilterList from "../../components/Filters/TimeFrameFilterList/TimeFrameFilterList";
import PeriodSelection from "../../components/Filters/PeriodSelection/PeriodSelection";
import './eurUsdView.css';
import { buildPeriodRange } from "../../utils/buildPeriodRange";
import ChartDisplay from "../../components/ChartDisplay/ChartDisplay";
import { MIN_DATE } from "../../utils/constants";

export default function EurUsdView() {
    const [isM1enabled, setIsM1enabled] = useState(true);
    const [isM5enabled, setIsM5enabled] = useState(true);
    const [isM15enabled, setIsM15enabled] = useState(true);
    const [isH1enabled, setIsH1enabled] = useState(true);

    const [currentDay, setCurrentDay] = useState(MIN_DATE.day);
    const [currentMonth, setCurrentMonth] = useState(MIN_DATE.month);
    const [currentYear, setCurrentYear] = useState(MIN_DATE.year);
    const [range, setRange] = useState(null);

    useEffect(() => {
        const rangeBuilt = buildPeriodRange();
        setRange(rangeBuilt);
    }, []);

    return <div>
        <Navbar currentLabel={"EURUSD"} />
        <div className="filters">
            <TimeFrameFilterList
                isM1enabled={isM1enabled} isM5enabled={isM5enabled} isM15enabled={isM15enabled} isH1enabled={isH1enabled}
                setIsM1enabled={setIsM1enabled} setIsM5enabled={setIsM5enabled} setIsM15enabled={setIsM15enabled} setIsH1enabled={setIsH1enabled}
            />
            {range !== null && <PeriodSelection currentDay={currentDay} currentMonth={currentMonth} currentYear={currentYear} range={range}
                setCurrentDay={setCurrentDay} setCurrentMonth={setCurrentMonth} setCurrentYear={setCurrentYear} />}
        </div>
        <ChartDisplay
            origin={"eurusd"}
            isM1enabled={isM1enabled} isM5enabled={isM5enabled} isM15enabled={isM15enabled} isH1enabled={isH1enabled}
            currentYear={currentYear} currentMonth={currentMonth} currentDay={currentDay}
        />
    </div>
};