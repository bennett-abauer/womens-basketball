import React from "react";

import "./table-view.styles.scss";

const SchoolsTable = ({ cellInfo }) => (
    <table>
        <tr>
            <th>School Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Website</th>
        </tr>
        {
            cellInfo.map(cell => (
                <tr>
                    <td>{ cell.school_name }</td>
                    <td>{ cell.school_address }</td>
                    <td>{ cell.school_phone_number }</td>
                    <td>{ cell.school_website }</td>
                </tr>
            ))
        }
    </table>
)

export default SchoolsTable;