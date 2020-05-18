import React from "react";

import "./table-view.styles.scss";

const AcademicsTable = ({ cellInfo }) => (
    <div className="table">
        <table>
            <tr>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Graduation Year</th>
                <th>ACT Score</th>
                <th>GPA</th>
                <th>School Name</th>
            </tr>
            {
                cellInfo.map(cell => (
                    <tr>
                        <td>{ cell.last_name }</td>
                        <td>{ cell.first_name }</td>
                        <td>{ cell.grad_year }</td>
                        <td>{ cell.act_score }</td>
                        <td>{ cell.gpa }</td>
                        <td>{ cell.school_name }</td>
                    </tr>
                ))
            }
        </table>
    </div>
);

export default AcademicsTable;