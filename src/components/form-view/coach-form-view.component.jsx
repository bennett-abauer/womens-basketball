import React from "react";
import axios from "axios";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./form-view.styles.scss";

class CoachFormView extends React.Component {
    constructor() {
        super();

        this.state = {
            first_name: "",
            last_name: "",
            address: "",
            phone_number: "",
            email: "",
            height: "",
            offensive_rebounds: "",
            defensive_rebounds: "",
            free_throw_prcntg: "",
            three_point_prcntg: "",
            two_point_prcntg: "",
            assists: "",
            turnovers: "",
            steals: "",
            blocks: "",
            games_played: "",
            games_started: "",
            minutes_played: "",
            personal_fouls: "",
            grad_year: "",
            act_score: "",
            gpa: "",
            school_name: "",
            level_id: "",
            position_id: "",
            notes: ""
        }
    }

    handleClick = event => {
        event.preventDefault();

        axios.post("/newRecruit", this.state)
        .then(response => {
            if (200 === response.status) {
                alert("Your submission has been received");
                window.location.reload(true);
            }
            else {
                alert("An exception occured.\nPlease review your changes and try again.");
            }
        })
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const contactInfoNames = ["first_name", "last_name", "address", "phone_number", "email"]
        const statNames = ["height", "offensive_rebounds", "defensive_rebounds", "free_throw_prcntg",
                           "three_point_prcntg", "two_point_prcntg", "assists", "turnovers", "steals", "blocks",
                           "games_played", "games_started", "minutes_played", "personal_fouls"]
        const academicNames = ["grad_year", "act_score", "gpa", "school_name"]
        const coachFormNames = ["level_id", "position_id", "notes"]
        const contactInfoLabels = ["First Name", "Last Name", "Address", "Phone Number", "Email"]
        const statLabels = ["Height: Feet", "Height: Inches", "Offensive Rebounds", "Defensive Rebounds",
                            "Free Throw %", "Three Point %", "Two Point %", "Assists", "Turnovers", "Steals",
                            "Blocks", "Games Played", "Games Started", "Minutes Played", "Personal Fouls"]
        const academicLabels = ["Grad Year", "ACT Score", "GPA", "School Name"]
        const coachFormLabels = ["Level", "Position", "Notes"]
        const contactInfoValues = [this.state.first_name, this.state.last_name, this.state.address, this.state.phone_number, this.state.email]
        const statValues = [this.state.height, this.state.offensive_rebounds, this.state.defensive_rebounds, this.state.free_throw_prcntg,
                            this.state.three_point_prcntg, this.state.two_point_prcntg, this.state.assists, this.state.turnovers, this.state.steals,
                            this.state.blocks, this.state.games_played, this.state.games_started, this.state.minutes_played, this.state.personal_fouls]
        const academicValues = [this.state.grad_year, this.state.act_score, this.state.gpa, this.state.school_name]
        const coachFormValues = [this.state.level_id, this.state.position_id, this.state.notes]
        const contactFormFields = []
        const statFormFields = []
        const academicFormFields = []
        const coachFormFields = []
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
        for (var coach = 0;coach < coachFormNames.length;coach+=1) {
            coachFormFields.push(
                <form className="custom-grid-item">
                    <FormInput
                        type="text"
                        name={ coachFormNames[coach] }
                        value={ coachFormValues[coach] }
                        onChange={ this.handleChange }
                        label={ coachFormLabels[coach] } />
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
                <br />
                <div className="personal-info-border">
                    <label className="field-label">Coach Information</label>
                    <div className="custom-grid-container">
                        { coachFormFields }
                    </div>
                </div>
                <div className="custom-grid-container">
                    <br />
                    <CustomButton onClick={ this.handleClick }>SUBMIT APPLICATION</CustomButton>
                </div>
            </div>
        )
    }
}

export default CoachFormView;