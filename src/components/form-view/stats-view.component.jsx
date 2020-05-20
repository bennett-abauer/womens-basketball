import React from "react";
import FormInput from "../form-input/form-input.component";

import "./form-view.styles.scss";

const StatsView = ({ recruitInfo }) => (
    recruitInfo.map(recruit =>
        <div className="custom-grid-container">
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="heightFeet"
                    value={ `${ recruit.height }` }
                    label="Height" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="offRebounds"
                    value={ `${ recruit.offensive_rebounds }` }
                    label="Offensive Rebounds" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="defRebounds"
                    value={ `${ recruit.defensive_rebounds }` }
                    label="Defensive Rebounds" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="freeThrowPrcnt"
                    value={ `${ recruit.free_throw_prcntg }` }
                    label="Free Throw %" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="threePointPrcnt"
                    value={ `${ recruit.three_point_prcntg }` }
                    label="Three Point %" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="twoPointPrcnt"
                    value={ `${ recruit.two_point_prcntg }` }
                    label="Two Point %" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="assists"
                    value={ `${ recruit.assists }` }
                    label="Assists" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="turnovers"
                    value={ `${ recruit.turnovers }` }
                    label="Turnovers" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="steals"
                    value={ `${ recruit.steals }` }
                    label="Steals" />
                    </form>
                    <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="blocks"
                    value={ `${ recruit.blocks }` }
                    label="Blocks" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="gamesPlayed"
                    value={ `${ recruit.games_played }` }
                    label="Games Played" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="gamesStarted"
                    value={ `${ recruit.games_started }` }
                    label="Games Started" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="minutesPlayed"
                    value={ `${ recruit.minutes_played }` }
                    label="Minutes Played" />
            </form>
            <form className="custom-grid-item">
                <FormInput
                    type="text"
                    name="personalFouls"
                    value={ `${ recruit.personal_fouls }` }
                    label="Personal Fouls" />
            </form>
        </div>
    )
)

export default StatsView;