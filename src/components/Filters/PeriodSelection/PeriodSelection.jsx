import React from 'react';
import './periodSelection.css';
import { MIN_DATE, MAX_DATE } from "../../../utils/constants";

export default function PeriodSelection({ currentDay, currentMonth, currentYear, setCurrentDay, setCurrentMonth, setCurrentYear, range }) {

    const months = Object.keys(range[currentYear]).map((month) => {
        return {
            value: month,
            label: month.charAt(0).toUpperCase() + month.slice(1),
        }
    });

    const editDay = (operator) => {
        const daysOfMonth = range[currentYear][currentMonth];
        const dayIndex = daysOfMonth.indexOf(currentDay);
        let monthsLowercase = months.map(month => month.value);
        const monthIndex = monthsLowercase.indexOf(currentMonth);
        if (operator === "plus") {
            if (dayIndex === daysOfMonth.length - 1) {
                let newMonth = monthsLowercase[monthIndex + 1];
                if (newMonth === undefined) {
                    const nextYear = currentYear + 1;
                    const monthsNextYear = Object.keys(range[nextYear]);
                    const firstMonth = monthsNextYear[0];
                    const firstDay = range[nextYear][firstMonth][0];
                    setCurrentYear(nextYear);
                    setCurrentMonth(firstMonth);
                    setCurrentDay(firstDay);
                } else {
                    setCurrentMonth(newMonth);
                    setCurrentDay(range[currentYear][newMonth][0]);
                }
            } else {
                setCurrentDay(daysOfMonth[dayIndex + 1]);
            }
        } else {
            if (dayIndex === 0) {
                if (monthIndex === 0) {
                    const prevYear = currentYear - 1;
                    const monthsPrevYear = Object.keys(range[prevYear]);
                    const lastMonth = monthsPrevYear[monthsPrevYear.length -1];
                    const lastDayIndex = range[prevYear][lastMonth].length - 1;
                    const lastDay = range[prevYear][lastMonth][lastDayIndex];
                    setCurrentYear(prevYear);
                    setCurrentMonth(lastMonth);
                    setCurrentDay(lastDay);
                } else {
                    const prevMonth = monthsLowercase[monthIndex - 1];
                    const nbDays = range[currentYear][prevMonth].length - 1;
                    setCurrentMonth(prevMonth);
                    setCurrentDay(range[currentYear][prevMonth][nbDays]);
                }
            } else {
                setCurrentDay(daysOfMonth[dayIndex - 1]);
            }
        }
    }

    const editYear = (operator) => {
        const newYear = operator === "plus" ? currentYear + 1 : currentYear - 1;
        let listOfMonths = Object.keys(range[newYear]);
        const newMonth = listOfMonths[0];
        setCurrentYear(newYear);
        setCurrentMonth(newMonth);
        setCurrentDay(range[newYear][newMonth][0]);
    }

    const editMonth = (month) => {
        setCurrentMonth(month);
        setCurrentDay(range[currentYear][month][0]);
    }

    const disabledAddDayButton = () => {
        return currentYear === MAX_DATE.year && currentMonth === MAX_DATE.month && currentDay === MAX_DATE.day;
    }

    const disabledSubtractDayButton = () => {
        return currentYear === MIN_DATE.year && currentMonth === MIN_DATE.month && currentDay === MIN_DATE.day;
    }

    return <div className="period-selection">
        <h2 className="period-selection-title">PERIOD SELECTION</h2>
        <div className="period-selection-filters">
            <div className='period-day'>
                <button type='button' onClick={() => editDay("plus")} disabled={disabledAddDayButton()}>Increase</button>
                <p>Day {currentDay}</p>
                <button type='button' onClick={() => editDay("minus")} disabled={disabledSubtractDayButton()}>Decrease</button>
            </div>
            <div className="period-month">
                <label htmlFor="period-month">Month</label>
                <select name="period-month" id="period-month" value={currentMonth} onChange={(e) => editMonth(e.target.value)}>
                    {months.map((month) => {
                        return <option key={month.value} value={month.value} label={month.label} />
                    })}
                </select>
            </div>
            {/* {console.log(currentYear)}
            {console.log(currentMonth)}
            {console.log(currentDay)} */}
            <div className='period-year'>
                <button type='button' onClick={() => editYear("plus")} disabled={currentYear === MAX_DATE.year}>Increase</button>
                <p>Year {currentYear}</p>
                <button type='button' onClick={() => editYear("minus")} disabled={currentYear === MIN_DATE.year}>Decrease</button>
            </div>
        </div>
    </div>
}