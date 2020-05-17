import React from "react";
import { Tabs, Tab } from "react-tab-view";
import axios from "axios";
import RecruitTable from "../table-view/table-view-recruits.component";
import StatsTable from "../table-view/table-view-stats.component";
import AcademicsTable from "../table-view/table-view-academics.component";


import "./tab-view.styles.scss";

const headers = ["Recruits", "Stats", "Academics", "School Info"]

class TabView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allRecruitData: []
        }
    }

    componentDidMount() {
        axios
        .post("/viewRecruits")
        .then(response => {
            this.setState({
                allRecruitData: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    componentDidUpdate() {
        console.log(this.state.allRecruitData)
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
                        <div>
                            <p>School info tab</p>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default TabView;