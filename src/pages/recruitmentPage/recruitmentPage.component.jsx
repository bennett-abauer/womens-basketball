import React from "react";
import RecruitmentForm from "../../components/recruitmentForm/recruitmentForm.component";

import "./recruitmentPage.styles.scss";

class RecruitmentPage extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            addressLine2: "",
            phoneNumber: "",
            email: ""
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { lastName, firstName, address, addressLine2, phoneNumber, email } = this.state;
        return (
            <div className="recruitment">
                <h2 className="title">Doane Athletics Women's Basketball Recruitment Form</h2>
                <span>Please fill out the form below to the best of your knowledge</span>
                <div className="grid-container">
                    <form className="firstName">
                        <RecruitmentForm
                            type="text"
                            name="firstName"
                            value={ firstName }
                            onChange={ this.handleChange }
                            label="First Name"
                            required />
                    </form>
                    <form className="lastName">
                        <RecruitmentForm
                            type="text"
                            name="lastName"
                            value={ lastName }
                            onChange={ this.handleChange }
                            label="Last Name"
                            required />
                    </form>
                    <form className="address">
                        <RecruitmentForm
                            type="text"
                            name="address"
                            value={ address }
                            onChange={ this.handleChange }
                            label="Address"
                            required />
                    </form>
                    <form className="addressLine2">
                        <RecruitmentForm
                            type="text"
                            name="addressLine2"
                            value={ addressLine2 }
                            onChange={ this.handleChange }
                            label="Address: Line 2"
                            required />
                    </form>
                    <form className="phoneNumber">
                        <RecruitmentForm
                            type="text"
                            name="phoneNumber"
                            value={ phoneNumber }
                            onChange={ this.handleChange }
                            label="Phone Number"
                            required />
                    </form>
                    <form className="email">
                        <RecruitmentForm
                            type="text"
                            name="email"
                            value={ email }
                            onChange={ this.handleChange }
                            label="Email"
                            required />
                    </form>
                </div>
            </div>
        )
    }
}

export default RecruitmentPage;