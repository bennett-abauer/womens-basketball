import React from "react";
import { Tabs, Tab } from "react-tab-view";

import RecruitTable from "../table-view/table-view-recruits.component";
import StatsTable from "../table-view/table-view-stats.component";
import AcademicsTable from "../table-view/table-view-academics.component";
import SchoolsTable from "../table-view/table-view-school-info.component";

import "../table-view/table-view.styles.scss";
import "./tab-view.styles.scss";

const headers = ["RECRUITS", "STATS", "ACADEMICS", "SCHOOL INFO"]

const TabView = ({ handleChange, recruits, schools }) => (
    <Tabs className="tabs" headers={ headers }>
        <Tab className="tab-view">
            <div className="table">
                <table>
                    <tr>
                        <th>Select</th>
                        <th>Last Name</th>
                        <th>First Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Current Status</th>
                        <th>Notes</th>
                    </tr>
                        {
                            recruits.map(cell => (
                                <tr>
                                    <td>
                                        <input type="checkbox"
                                               value={ cell.recruit_id }
                                               onChange={ handleChange } />
                                    </td>
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
            </div>
        </Tab>
        <Tab className="tab-view">
            <StatsTable cellInfo={ recruits } />
        </Tab>
        <Tab className="tab-view">
            <AcademicsTable cellInfo={ recruits } />
        </Tab>
        <Tab className="tab-view">
            <SchoolsTable cellInfo={ schools }/>
        </Tab>
    </Tabs>
)

export default TabView;