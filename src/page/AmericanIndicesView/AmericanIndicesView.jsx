import React, { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import TimeFrameFilterList from "../../components/Filters/TimeFrameFilterList/TimeFrameFilterList";
import PeriodSelection from "../../components/Filters/PeriodSelection/PeriodSelection";
import '../EurUsdView/eurUsdView.css';
import { buildPeriodRange } from "../../utils/buildPeriodRange";
import { MIN_DATE } from "../../utils/constants";
import ChartDisplay from "../../components/ChartDisplay/ChartDisplay";
import AmericanIndicesFilterList from "../../components/Filters/AmericanIndicesFilterList/AmericanIndicesFilterList";

export default function AmericanIndicesView() {
    const [isM1enabled, setIsM1enabled] = useState(true);
    const [isM5enabled, setIsM5enabled] = useState(true);
    const [isM15enabled, setIsM15enabled] = useState(true);
    const [isH1enabled, setIsH1enabled] = useState(true);

    const [isNQenabled, setIsNQenabled] = useState(true);
    const [isESenabled, setIsESenabled] = useState(true);

    const [currentDay, setCurrentDay] = useState(MIN_DATE.day);
    const [currentMonth, setCurrentMonth] = useState(MIN_DATE.month);
    const [currentYear, setCurrentYear] = useState(MIN_DATE.year);
    const [range, setRange] = useState(null);

    useEffect(() => {
        const rangeBuilt = buildPeriodRange();
        setRange(rangeBuilt);
    }, []);

    return (
        <div>
            <Navbar currentLabel={"NQ & ES"} />
            <div className="filters">
                <TimeFrameFilterList
                    isM1enabled={isM1enabled} isM5enabled={isM5enabled} isM15enabled={isM15enabled} isH1enabled={isH1enabled}
                    setIsM1enabled={setIsM1enabled} setIsM5enabled={setIsM5enabled} setIsM15enabled={setIsM15enabled} setIsH1enabled={setIsH1enabled}
                />
                <AmericanIndicesFilterList
                    isNQenabled={isNQenabled} isESenabled={isESenabled}
                    setIsNQenabled={setIsNQenabled} setIsESenabled={setIsESenabled}
                />
                {range !== null && <PeriodSelection
                    currentDay={currentDay} currentMonth={currentMonth} currentYear={currentYear} range={range}
                    setCurrentDay={setCurrentDay} setCurrentMonth={setCurrentMonth} setCurrentYear={setCurrentYear}
                />}
            </div>
            <ChartDisplay
                origin={"americanIndices"}
                isM1enabled={isM1enabled} isM5enabled={isM5enabled} isM15enabled={isM15enabled} isH1enabled={isH1enabled}
                isNQenabled={isNQenabled} isESenabled={isESenabled}
                currentYear={currentYear} currentMonth={currentMonth} currentDay={currentDay}
            />
        </div>
    );
};