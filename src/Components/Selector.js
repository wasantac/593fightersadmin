import React from 'react';
import {FaArrowDown} from 'react-icons/fa';
import '../css/selector.scss'
const Selector = ({onClick,value,className}) => {
    return (
        <div onClick={onClick} className={`selector-593 ${className}`}>
            <p className="m-0">{value}</p>
            <p className="m-0"><FaArrowDown></FaArrowDown></p>
        </div>
    );
}

export default Selector;
