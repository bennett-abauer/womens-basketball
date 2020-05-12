import React from "react";

import DropDowns from "../../components/drop-down-lists/drop-down-lists.component";
import TabView from "../../components/tab-view/tab-view.component";

import "./recruit-view.styles.scss";

class RecruitView extends React.Component {
    constructor() {
        super();

        this.state = {
            positionId: "",
            levelId: "",
            SchoolId: "",
            currentStatus: ""
        }
    }

    render() {
        return(
            <div className="grid-container">
                <DropDowns className="drop-downs" />
                <TabView className="tab-view" />
            </div>
        );
    }
}

export default RecruitView;