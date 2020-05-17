import React from "react";

import "./table-view.styles.scss";

const RecruitTable = ({ cellInfo }) => (
    <table>
        <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Current Status</th>
            <th>Notes</th>
        </tr>
        {
            cellInfo.map(cell => (
                <tr>
                    <td>{ cell.last_name }</td>
                    <td>{ cell.first_name }</td>
                    <td>{ cell.address }</td>
                    <td>{ cell.phone_number }</td>
                    <td>{ cell.email }</td>
                    <td>{ cell.status }</td>
                    <td>{ cell.notes }</td>
                </tr>
            ))
        }
    </table>
);

export default RecruitTable;