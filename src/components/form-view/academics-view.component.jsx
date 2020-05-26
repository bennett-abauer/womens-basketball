import React from "react";
import axios from "axios";

import EditFormInput from "../form-input/edit-form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./form-view.styles.scss";

class AcademicsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recruit_id: `${ this.props.selectedRecruit.recruit_id }`,
            grad_year: "",
            act_score: "",
            gpa: "",
            school_name: ""
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    handleClick = event => {
        event.preventDefault();

        axios.post("/updateRecruits", this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render() {
        return(
            <div className="custom-grid-container">
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="grad_year"
                        value={ this.state.height }
                        placeholder={ `${ this.props.selectedRecruit.grad_year }` }
                        label="Graduation Year" />
                </form><form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="act_score"
                        value={ this.state.height }
                        placeholder={ `${ this.props.selectedRecruit.act_score }` }
                        label="ACT Score" />
                </form><form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="gpa"
                        value={ this.state.height }
                        placeholder={ `${ this.props.selectedRecruit.gpa }` }
                        label="GPA" />
                </form><form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="school_name"
                        value={ this.state.height }
                        placeholder={ `${ this.props.selectedRecruit.school_name }` }
                        label="School Name" />
                </form>
                <CustomButton onClick={ this.handleClick }>Submit Change</CustomButton>
            </div>
        )
    }
}

export default AcademicsView;