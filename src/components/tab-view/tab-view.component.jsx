import React from "react";
import { Tabs, Tab } from "react-tab-view";
import axios from "axios";
import RecruitTable from "../table-view/table-view-recruits.component";
import StatsTable from "../table-view/table-view-stats.component";
import AcademicsTable from "../table-view/table-view-academics.component";
import SchoolsTable from "../table-view/table-view-school-info.component";


import "./tab-view.styles.scss";

const headers = ["Recruits", "Stats", "Academics", "School Info"]

class TabView extends React.Component {
    constructor() {
        super();

        this.state = {
            allRecruitData: [],
            schoolInfo: []
        }
    }

    componentWillMount() {
        let viewRecruits = "/viewRecruits"
        let schoolInfo = "/schoolTableView"

        const requestOne = axios.post(viewRecruits);
        const requestTwo = axios.post(schoolInfo);

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
            this.setState({ allRecruitData: responses[0].data })
            this.setState({ schoolInfo: responses[1].data })
        })).catch(errors => {
            console.log(errors)
        });
    }

    componentDidUpdate() {
        console.log(this.state.allRecruitData);
        console.log(this.state.schoolInfo);
    }

    render() {
        return(
            <div>
                <Tabs headers={ headers }>
                    <Tab>
                        <RecruitTable cellInfo={ this.state.allRecruitData } />
                    </Tab>
                    <Tab>
                        <StatsTable cellInfo={ this.state.allRecruitData } />
                    </Tab>
                    <Tab>
                        <AcademicsTable cellInfo={ this.state.allRecruitData } />
                    </Tab>
                    <Tab>
                        <SchoolsTable cellInfo={ this.state.schoolInfo }/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabView;