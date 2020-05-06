import React from "react";
import RecruitmentForm from "../../components/recruitmentForm/recruitmentForm.component";

class RecruitmentPage extends React.Component {
    constructor() {
        super();

        this.state = {
            lastName: "",
            firstName: "",
            address: "",
            phoneNumber: "",
            email: ""
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { lastName, firstName, address, phoneNumber, email } = this.state;
        return (
            <div className="recruitment">
                <h2 className="title">Doane Athletics Women's Basketball Recruitment Form</h2>
                <span>Please fill out the form below to the best of your knowledge</span>
                <form className="recruitment-form">
                    <RecruitmentForm
                        type="text"
                        name="lastName"
                        value={ lastName }
                        onChange={ this.handleChange }
                        label="Last Name"
                        required />
                    <RecruitmentForm
                        type="text"
                        name="firstName"
                        value={ firstName }
                        onChange={ this.handleChange }
                        label="First Name"
                        required />
                    <RecruitmentForm
                        type="text"
                        name="address"
                        value={ address }
                        onChange={ this.handleChange }
                        label="Address"
                        required />
                    <RecruitmentForm
                        type="text"
                        name="phoneNumber"
                        value={ phoneNumber }
                        onChange={ this.handleChange }
                        label="Phone Number"
                        required />
                    <RecruitmentForm
                        type="text"
                        name="email"
                        value={ email }
                        onChange={ this.handleChange }
                        label="Email"
                        required />
                </form>
            </div>
        )
    }
}

export default RecruitmentPage;