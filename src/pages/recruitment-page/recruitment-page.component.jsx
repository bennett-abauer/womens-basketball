import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "bootstrap/dist/css/bootstrap.css";
import "./recruitment-page.styles.scss";

class RecruitmentPage extends React.Component {
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
            position: "",
            teamLevel: "",
            gradYear: "",
            actScore: "",
            gpa: "",
            schoolName: "",
            currentStatus: "",
            notes: "",
            showStats: false,
            showAcademics: false
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { lastName, firstName, address, addressLine2, phoneNumber, email, heightFeet, heightInches,
                offRebounds, defRebounds, freeThrowPrcnt, threePointPrcnt, twoPointPrcnt, assists, turnovers,
                steals, blocks, gamesPlayed, gamesStarted, minutesPlayed, personalFouls, position,
                teamLevel, gradYear, actScore, gpa, schoolName, currentStatus, notes, showStats, showAcademics } = this.state;
        return (
            <div>
                <div className="recruitment">
                    <h2 className="title">Doane Athletics Women's Basketball Recruitment Form</h2>
                    <span>Please fill out the form below to the best of your knowledge</span>
                </div>
                <br />
                <div className="container">
                    <div className="personal-info-border">
                        <label className="field-label">Personal Contact Information</label>
                        <div className="row">
                            <div className="col-sm-2" />
                                <form className="col-sm-4">
                                    <FormInput
                                        type="text"
                                        name="firstName"
                                        value={ firstName }
                                        onChange={ this.handleChange }
                                        label="First Name"
                                        required />
                                </form>
                                <form className="col-sm-4">
                                    <FormInput
                                        type="text"
                                        name="lastName"
                                        value={ lastName }
                                        onChange={ this.handleChange }
                                        label="Last Name"
                                        required />
                                </form>
                            </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="address"
                                    value={ address }
                                    onChange={ this.handleChange }
                                    label="Address"
                                    required />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="phoneNumber"
                                    value={ phoneNumber }
                                    onChange={ this.handleChange }
                                    label="Phone Number"
                                    required />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="addressLine2"
                                    value={ addressLine2 }
                                    onChange={ this.handleChange }
                                    label="Address: Line 2"
                                    required />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="email"
                                    value={ email }
                                    onChange={ this.handleChange }
                                    label="Email"
                                    required />
                            </form>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-2" />
                        <form className="col-sm-7">
                            <label for="stat-sheet-import" className="import-label">Submit Player Stat Sheet:</label>
                            <input id="stat-sheet-import" type="file" />
                        </form>
                        <div className="col-sm-1">
                            <CustomButton type="submit">Submit</CustomButton>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2" />
                        <button className="col-sm-6 manual-entry" onClick={ () => this.setState({ showStats: !showStats }) }>
                            Click Here To Toggle Manual Stat Entry Visibility
                        </button>
                    </div>
                    <br />
                    <div className="personal-info-border player-stat-section" style={{ display: (showStats ? "block" : "none") }}>
                        <label className="field-label">Player Stats</label>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="heightFeet"
                                    value={ heightFeet }
                                    onChange={ this.handleChange }
                                    label="Height: Feet" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="heightInches"
                                    value={ heightInches }
                                    onChange={ this.handleChange }
                                    label="Height: Inches" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="offRebounds"
                                    value={ offRebounds }
                                    onChange={ this.handleChange }
                                    label="Offensive Rebounds" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="defRebounds"
                                    value={ defRebounds }
                                    onChange={ this.handleChange }
                                    label="Defensive Rebounds" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="freeThrowPrcnt"
                                    value={ freeThrowPrcnt }
                                    onChange={ this.handleChange }
                                    label="Free Throw %" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="assists"
                                    value={ assists }
                                    onChange={ this.handleChange }
                                    label="Assists" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="threePointPrcnt"
                                    value={ threePointPrcnt }
                                    onChange={ this.handleChange }
                                    label="Three Point %" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="turnovers"
                                    value={ turnovers }
                                    onChange={ this.handleChange }
                                    label="Turnovers" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="twoPointPrcnt"
                                    value={ twoPointPrcnt }
                                    onChange={ this.handleChange }
                                    label="Two Point %" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="steals"
                                    value={ steals }
                                    onChange={ this.handleChange }
                                    label="Steals" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="gamesPlayed"
                                    value={ gamesPlayed }
                                    onChange={ this.handleChange }
                                    label="Games Played" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="blocks"
                                    value={ blocks }
                                    onChange={ this.handleChange }
                                    label="Blocks" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="gamesStarted"
                                    value={ gamesStarted }
                                    onChange={ this.handleChange }
                                    label="Games Started" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="personalFouls"
                                    value={ personalFouls }
                                    onChange={ this.handleChange }
                                    label="Personal Fouls" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="minutesPlayed"
                                    value={ minutesPlayed }
                                    onChange={ this.handleChange }
                                    label="Minutes Played" />
                            </form>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-2" />
                        <form className="col-sm-7">
                            <label for="academic-import" className="import-label">Submit Player Stat Sheet:</label>
                            <input id="academic-import" type="file" />
                        </form>
                        <div className="col-sm-1">
                            <CustomButton type="submit">Submit</CustomButton>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2" />
                        <button className="col-sm-6 manual-entry" onClick={ () => this.setState({ showAcademics: !showAcademics }) }>
                            Click Here To Toggle Manual Academic Entry Visibility
                        </button>
                    </div>
                    <br />
                    <div className="personal-info-border" style={{ display: (showAcademics ? "block" : "none") }}>
                        <label className="field-label">Academic Information</label>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="schoolName"
                                    value={ schoolName }
                                    onChange={ this.handleChange }
                                    label="School Name" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="gpa"
                                    value={ gpa }
                                    onChange={ this.handleChange }
                                    label="GPA" />
                            </form>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="gradYear"
                                    value={ gradYear }
                                    onChange={ this.handleChange }
                                    label="Graduation Year" />
                            </form>
                            <form className="col-sm-4">
                                <FormInput
                                    type="text"
                                    name="actScore"
                                    value={ actScore }
                                    onChange={ this.handleChange }
                                    label="ACT Score" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecruitmentPage;