import React from "react";

import "./drop-down-lists.styles.scss";

const StatusDropDown = ({ onChange }) => (
    <div>
        <select className="drop-down" onChange={ onChange }>
            <option value={ 0 }>Select A Status</option>
            <option value={ 1 }>Not Contacted</option>
            <option value={ 2 }>Contacted</option>
            <option value={ 3 }>Visited Campus</option>
            <option value={ 4 }>Applied</option>
            <option value={ 5 }>Deposited</option>
            <option value={ 6 }>Commited</option>
        </select>
    </div>
);

export default StatusDropDown;