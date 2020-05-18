import React from "react";

const LevelDropDown = ({ onChange }) => (
    <div>
        <select className="drop-down" onChange={ onChange }>
            <option value={ 0 }>Select A Level</option>
            <option value={ 1 }>Junior Varsity</option>
            <option value={ 2 }>Tweener</option>
            <option value={ 3 }>Varsity</option>
        </select>
    </div>
)

export default LevelDropDown;