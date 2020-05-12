import React from "react";
import { Tabs, Tab } from "react-tab-view";
import RecruitTable from "../table-view/table-view-recruits.component";

import "./tab-view.styles.scss";

const headers = ["Recruits", "Stats", "Academics", "School Info"]

class TabView extends React.Component {
    constructor() {
        super();

        this.state = {
            query: ""
        }
    }

    render() {
        return(
            <div>
                <Tabs headers={ headers }>
                    <Tab>
                        <div>
                            <RecruitTable />
                        </div>
                    </Tab>
                    <Tab>
                        <div>
                            <p>Stats tab</p>
                        </div>
                    </Tab>
                    <Tab>
                        <div>
                            <p>Academics tab</p>
                        </div>
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