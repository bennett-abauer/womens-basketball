import React from "react";

import "./form-input.styles.scss";

const EditFormInput = ({ handleChange, label, value, ...otherProps}) => (
    <div className="group">
        <input className="form-input" onChange={ handleChange } { ...otherProps } />
        <label className={ `${ otherProps.placeholder.length ? "shrink" : "" } form-input-label` }>
            { label }
        </label>
    </div>
)

export default EditFormInput;