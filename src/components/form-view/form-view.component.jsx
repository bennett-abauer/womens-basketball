import React from "react";
import FormInput from "../../components/form-input/form-input.component";
//import CustomButton from "../../components/custom-button/custom-button.component";

import "./form-view.styles.scss";

class FormView extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            addressLine2: "",
            phoneNumber: "",
            email: "",
            heightFeet: "",
            heightInches: "",
            offRebounds: "",
            defRebounds: "",
            freeThrowPrcnt: "",
            threePointPrcnt: "",
            twoPointPrcnt: "",
            assists: "",
            turnovers: "",
            steals: "",
            blocks: "",
            gamesPlayed: "",
            gamesStarted: "",
            minutesPlayed: "",
            personalFouls: "",
            gradYear: "",
            actScore: "",
            gpa: "",
            schoolName: ""
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value }, function () { console.log(this.state.firstName) });
    }

    render() {
        const contactInfoNames = ["firstName", "lastName", "address", "addressLine2", "phoneNumber", "email"]
        const statNames = ["heightFeet", "heightInches", "offRebounds", "defRebounds", "freeThrowPrcnt",
                           "threePointPrcnt", "twoPointPrcnt", "assists", "turnovers", "steals", "blocks",
                           "gamesPlayed", "gamesStarted", "minutesPlayed", "personalFouls"]
        const academicNames = ["gradYear", "actScore", "gpa", "schooName"]
        const contactInfoLabels = ["First Name", "Last Name", "Address", "Address: Line 2", "Phone Number", "Email"]
        const statLabels = ["Height: Feet", "Height: Inches", "Offensive Rebounds", "Defensive Rebounds",
                            "Free Throw %", "Three Point %", "Two Point %", "Assists", "Turnovers", "Steals",
                            "Blocks", "Games Played", "Games Started", "Minutes Played", "Personal Fouls"]
        const academicLabels = ["Grad Year", "ACT Score", "GPA", "School Name"]
        const contactInfoValues = [this.state.firstName, this.state.lastName, this.state.address, this.state.addressLine2, this.state.phoneNumber, this.state.email]
        const statValues = [this.state.heightFeet, this.state.heightInches, this.state.offRebounds, this.state.defRebounds, this.state.freeThrowPrcnt,
                            this.state.threePointPrcnt, this.state.twoPointPrcnt, this.state.assists, this.state.turnovers, this.state.steals,
                            this.state.blocks, this.state.gamesPlayed, this.state.gamesStarted, this.state.minutesPlayed, this.state.personalFouls]
        const academicValues = [this.state.gradYear, this.state.actScore, this.state.gpa, this.state.schoolName]
        const contactFormFields = []
        const statFormFields = []
        const academicFormFields = []
        for (var contact = 0;contact < contactInfoNames.length;contact+=1) {
            contactFormFields.push(
                <form className="custom-grid-item">
                    <FormInput
                        type="text"
                        name={ contactInfoNames[contact] }
                        value={ contactInfoValues[contact] }
                        onChange={ this.handleChange }
                        label={ contactInfoLabels[contact] } />
                </form>
            )
        }
        for (var stat = 0;stat < statNames.length;stat+=1) {
            statFormFields.push(
                <form className="custom-grid-item">
                    <FormInput
                        type="text"
                        name={ statNames[stat] }
                        value={ statValues[stat] }
                        onChange={ this.handleChange }
                        label={ statLabels[stat] } />
                </form>
            )
        }
        for (var academic = 0;academic < academicNames.length;academic+=1) {
            academicFormFields.push(
                <form className="custom-grid-item">
                    <FormInput
                        type="text"
                        name={ academicNames[academic] }
                        value={ academicValues[academic] }
                        onChange={ this.handleChange }
                        label={ academicLabels[academic] } />
                </form>
            )
        }
        return(
            <div>
                <div className="recruitment">
                    <h2 className="title">Doane Athletics Women's Basketball Recruitment Form</h2>
                    <span>Please fill out the form below to the best of your knowledge</span>
                </div>
                <br />
                <div className="personal-info-border">
                    <label className="field-label">Personal Contact Information</label>
                        <div className="custom-grid-container">
                            { contactFormFields }
                        </div>
                </div>
                <br />
                <div className="personal-info-border">
                    <label className="field-label">Player Stats</label>
                        <div className="custom-grid-container">
                            { statFormFields }
                        </div>
                </div>
                <br />
                <div className="personal-info-border">
                    <label className="field-label">Academic Information</label>
                        <div className="custom-grid-container">
                            { academicFormFields }
                        </div>
                </div>
            </div>
        )
    }
}

export default FormView;