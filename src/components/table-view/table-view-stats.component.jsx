import React from "react";

import "./table-view.styles.scss";

const StatsTable = ({ cellInfo }) => (
    <table>
        <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Height</th>
            <th>Offensive Rebounds</th>
            <th>Defensive Rebounds</th>
            <th>Free Throw %</th>
            <th>Three Point %</th>
            <th>Two Point %</th>
            <th>Assists</th>
            <th>Turnovers</th>
            <th>Steals</th>
            <th>Blocks</th>
            <th>Games Played</th>
            <th>Games Started</th>
            <th>Minutes Played</th>
            <th>Personal Fouls</th>
        </tr>
        {
            cellInfo.map(cell => (
                <tr>
                    <td>{ cell.last_name }</td>
                    <td>{ cell.first_name }</td>
                    <td>{ cell.height }</td>
                    <td>{ cell.offensive_rebounds }</td>
                    <td>{ cell.defensive_rebounds }</td>
                    <td>{ cell.free_throw_prcntg }</td>
                    <td>{ cell.three_point_prcntg }</td>
                    <td>{ cell.two_point_prcntg }</td>
                    <td>{ cell.assists }</td>
                    <td>{ cell.turnovers }</td>
                    <td>{ cell.steals }</td>
                    <td>{ cell.blocks }</td>
                    <td>{ cell.games_played }</td>
                    <td>{ cell.games_started }</td>
                    <td>{ cell.minutes_played }</td>
                    <td>{ cell.personal_fouls }</td>
                </tr>
            ))
        }
    </table>
);

export default StatsTable;