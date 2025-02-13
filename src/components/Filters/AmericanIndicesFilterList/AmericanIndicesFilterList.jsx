import React from 'react';
import AmericanIndicesFilterItem from '../AmericanIndicesFilterItem/AmericanIndicesFilterItem';
import "./americanIndicesFilterList.css";

export default function AmericanIndicesFilter({ isNQenabled, isESenabled, setIsNQenabled, setIsESenabled }) {
    const properties = [
        {
            indice: isNQenabled,
            setIndice: setIsNQenabled,
            label: "NQ",
        },
        {
            indice: isESenabled,
            setIndice: setIsESenabled,
            label: "ES",
        },
    ]

    return (
        <div className="indice-filter">
            <h2 className='indice-title'>INDICE FILTER</h2>
            <div className="indice-checkboxes">
                {properties.map((item, i) => {
                    return <AmericanIndicesFilterItem key={i} indice={item.indice} label={item.label} setIndice={item.setIndice} />
                })}
            </div>
        </div>
    )
}