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
            notes: ""
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
                teamLevel, gradYear, actScore, gpa, schoolName, currentStatus, notes } = this.state;
        return (
            <div className="recruitment">
                <h2 className="title">Doane Athletics Women's Basketball Recruitment Form</h2>
                <span>Please fill out the form below to the best of your knowledge</span>
                <div className="two-column-grid-container">
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
                    <form className="height-feet">
                        <RecruitmentForm
                            type="text"
                            name="heightFeet"
                            value={ heightFeet }
                            onChange={ this.handleChange }
                            label="Height: Feet" />
                    </form>
                    <form className="height-inches">
                        <RecruitmentForm
                            type="text"
                            name="heightInches"
                            value={ heightInches }
                            onChange={ this.handleChange }
                            label="Height: Inches" />
                    </form>
                    <form className="off-rebounds">
                        <RecruitmentForm
                            type="text"
                            name="offRebounds"
                            value={ offRebounds }
                            onChange={ this.handleChange }
                            label="Offensive Rebounds" />
                    </form>
                    <form className="def-rebounds">
                        <RecruitmentForm
                            type="text"
                            name="defRebounds"
                            value={ defRebounds }
                            onChange={ this.handleChange }
                            label="Defensive Rebounds" />
                    </form>
                </div>
                <div className="three-column-grid-container">
                    <form className="free-throw-prcnt">
                        <RecruitmentForm
                            type="text"
                            name="freeThrowPrcnt"
                            value={ freeThrowPrcnt }
                            onChange={ this.handleChange }
                            label="Free Throw Percentage" />
                    </form>
                    <form className="three-point-prcnt">
                        <RecruitmentForm
                            type="text"
                            name="threePointPrcnt"
                            value={ threePointPrcnt }
                            onChange={ this.handleChange }
                            label="Three Point Percentage" />
                    </form>
                    <form className="two-point-prcnt">
                        <RecruitmentForm
                            type="text"
                            name="twoPointPrcnt"
                            value={ twoPointPrcnt }
                            onChange={ this.handleChange }
                            label="Two Point Percentage" />
                    </form>
                </div>
                <div className="four-column-grid-container">
                    <form className="assists">
                        <RecruitmentForm
                            type="text"
                            name="assists"
                            value={ assists }
                            onChange={ this.handleChange }
                            label="Assists" />
                    </form>
                    <form className="turnovers">
                        <RecruitmentForm
                            type="text"
                            name="turnovers"
                            value={ turnovers }
                            onChange={ this.handleChange }
                            label="Turnovers" />
                    </form>
                    <form className="steals">
                        <RecruitmentForm
                            type="text"
                            name="steals"
                            value={ steals }
                            onChange={ this.handleChange }
                            label="Steals" />
                    </form>
                    <form className="blocks">
                        <RecruitmentForm
                            type="text"
                            name="blocks"
                            value={ blocks }
                            onChange={ this.handleChange }
                            label="Blocks" />
                    </form>
                    <form className="games-played">
                        <RecruitmentForm
                            type="text"
                            name="gamesPlayed"
                            value={ gamesPlayed }
                            onChange={ this.handleChange }
                            label="Games Played" />
                    </form>
                    <form className="games-started">
                        <RecruitmentForm
                            type="text"
                            name="gamesStarted"
                            value={ gamesStarted }
                            onChange={ this.handleChange }
                            label="Games Started" />
                    </form>
                    <form className="minutes-played">
                        <RecruitmentForm
                            type="text"
                            name="minutesPlayed"
                            value={ minutesPlayed }
                            onChange={ this.handleChange }
                            label="Minutes Played" />
                    </form>
                    <form className="personal-fouls">
                        <RecruitmentForm
                            type="text"
                            name="personalFouls"
                            value={ personalFouls }
                            onChange={ this.handleChange }
                            label="Personal Fouls" />
                    </form>
                    <form className="grad-year">
                        <RecruitmentForm
                            type="text"
                            name="gradYear"
                            value={ gradYear }
                            onChange={ this.handleChange }
                            label="Graduation Year" />
                    </form>
                    <form className="act-score">
                        <RecruitmentForm
                            type="text"
                            name="actScore"
                            value={ actScore }
                            onChange={ this.handleChange }
                            label="ACT Score" />
                    </form>
                    <form className="gpa">
                        <RecruitmentForm
                            type="text"
                            name="gpa"
                            value={ gpa }
                            onChange={ this.handleChange }
                            label="GPA" />
                    </form>
                    <form className="school-name">
                        <RecruitmentForm
                            type="text"
                            name="schoolName"
                            value={ schoolName }
                            onChange={ this.handleChange }
                            label="School Name" />
                    </form>
                </div>
                <div className="three-column-grid-container">
                <form className="position">
                        <RecruitmentForm
                            type="text"
                            name="position"
                            value={ position }
                            onChange={ this.handleChange }
                            label="Position" />
                    </form>
                    <form className="team-level">
                        <RecruitmentForm
                            type="text"
                            name="teamLevel"
                            value={ teamLevel }
                            onChange={ this.handleChange }
                            label="Which Level" />
                    </form>
                    <form className="current-status">
                        <RecruitmentForm
                            type="text"
                            name="currentStatus"
                            value={ currentStatus }
                            onChange={ this.handleChange }
                            label="Current Recruitment Status" />
                    </form>
                    <form className="notes">
                        <RecruitmentForm
                            type="text"
                            name="notes"
                            value={ notes }
                            onChange={ this.handleChange }
                            label="Notes" />
                    </form>
                </div>
            </div>
        )
    }
}

export default RecruitmentPage;