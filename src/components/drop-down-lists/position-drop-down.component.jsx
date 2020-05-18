import React from "react";

import "./drop-down-lists.styles.scss";

const PositionDropDown = ({ onChange }) => (
    <div>
        <select className="drop-down" onChange={ onChange }>
            <option value={ 0 }>Select A Position</option>
            <option value={ 1 }>Point Guard</option>
            <option value={ 2 }>Shooting Point Guard</option>
            <option value={ 3 }>Small Forward</option>
            <option value={ 4 }>Forward</option>
            <option value={ 5 }>Post</option>
        </select>
    </div>
);

export default PositionDropDown;