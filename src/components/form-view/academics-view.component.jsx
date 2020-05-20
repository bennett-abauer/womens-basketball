import React from "react";
import FormInput from "../form-input/form-input.component";

import "./form-view.styles.scss";

const AcademicsView = ({ recruitInfo }) => (
    recruitInfo.map(recruit =>
        <div className="custom-grid-container">
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="gradYear"
                    value={ `${ recruit.grad_year }` }
                    label="Graduation Year" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="actScore"
                    value={ `${ recruit.act_score }` }
                    label="ACT Score" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="gpa"
                    value={ `${ recruit.gpa }` }
                    label="GPA" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="schoolName"
                    value={ `${ recruit.school_name }` }
                    label="School Name" />
            </form>
        </div>
    )
);

export default AcademicsView;