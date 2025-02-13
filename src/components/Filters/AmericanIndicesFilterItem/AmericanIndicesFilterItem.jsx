import React from 'react';
import "./americanIndicesFilterItem.css";

export default function AmericanIndicesFilterItem({ indice, setIndice, label }) {
    return (
        <div className='indice-checkbox'>
            <label htmlFor={`indice-${label}`} className="indice-label">{label}</label>
            <input id={`indice-${label}`} name={`indice-${label}`} type="checkbox" checked={indice} onClick={() => setIndice(!indice)} onChange={() => { }} />
        </div>
    )
}