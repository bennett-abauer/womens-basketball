import React from "react";
import axios from "axios";

import EditFormInput from "../form-input/edit-form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./form-view.styles.scss";

class StatsView extends React.Component {
    state = {
        recruit_id: `${ this.props.selectedRecruit.recruit_id }`,
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
        level_id: "",
        level_name: "",
        position_id: "",
        position_name: "",
        notes: ""
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
                        name="height"
                        value={ this.state.height }
                        placeholder={ `${ this.props.selectedRecruit.height }` }
                        label="Height" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="offensive_rebounds"
                        value={ this.state.offensive_rebounds }
                        placeholder={ `${ this.props.selectedRecruit.offensive_rebounds }` }
                        label="Offensive Rebounds" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="defensive_rebounds"
                        value={ this.state.defensive_rebounds }
                        placeholder={ `${ this.props.selectedRecruit.defensive_rebounds }` }
                        label="Defensive Rebounds" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="free_throw_prcntg"
                        value={ this.state.free_throw_prcntg }
                        placeholder={ `${ this.props.selectedRecruit.free_throw_prcntg }` }
                        label="Free Throw %" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="three_point_prcntg"
                        value={ this.state.three_point_prcntg }
                        placeholder={ `${ this.props.selectedRecruit.three_point_prcntg }` }
                        label="Three Point %" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="two_point_prcntg"
                        value={ this.state.two_point_prcntg }
                        placeholder={ `${ this.props.selectedRecruit.two_point_prcntg }` }
                        label="Two Point %" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="assists"
                        value={ this.state.assists }
                        placeholder={ `${ this.props.selectedRecruit.assists }` }
                        label="Assists" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="turnovers"
                        value={ this.state.turnovers }
                        placeholder={ `${ this.props.selectedRecruit.turnovers }` }
                        label="Turnovers" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="steals"
                        value={ this.state.steals }
                        placeholder={ `${ this.props.selectedRecruit.steals }` }
                        label="Steals" />
                        </form>
                        <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="blocks"
                        value={ this.state.blocks }
                        placeholder={ `${ this.props.selectedRecruit.blocks }` }
                        label="Blocks" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="games_played"
                        value={ this.state.games_played }
                        placeholder={ `${ this.props.selectedRecruit.games_played }` }
                        label="Games Played" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="games_started"
                        value={ this.state.games_started }
                        placeholder={ `${ this.props.selectedRecruit.games_started }` }
                        label="Games Started" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="minutes_played"
                        value={ this.state.minutes_played }
                        placeholder={ `${ this.props.selectedRecruit.minutes_played }` }
                        label="Minutes Played" />
                </form>
                <form className="custom-grid-item">
                    <EditFormInput
                        handleChange={ this.handleChange }
                        type="text"
                        name="personal_fouls"
                        value={ this.state.personal_fouls }
                        placeholder={ `${ this.props.selectedRecruit.personal_fouls }` }
                        label="Personal Fouls" />
                </form>
                <CustomButton onClick={ this.handleClick }>Submit Change</CustomButton>
            </div>
        )
    }
}

export default StatsView;