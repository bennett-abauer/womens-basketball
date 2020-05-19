import React from "react";
import axios from "axios";

import PositionDropDown from "../../components/drop-down-lists/position-drop-down.component";
import LevelDropDown from "../../components/drop-down-lists/level-drop-down.component";
import StatusDropDown from "../../components/drop-down-lists/status-drop-down.component";
import TabView from "../../components/tab-view/tab-view.component";

import "bootstrap/dist/css/bootstrap.css";
import "./recruit-view.styles.scss";

class RecruitView extends React.Component {
    constructor() {
        super();

        this.state = {
            allRecruitData: [],
            schoolInfo: [],
            selectedRecruit: [],
            recruitFilter: 0,
            positionFilter: 0,
            levelFilter: 0,
            statusFilter: 0,
            filteredRecruits: [],
            checkboxChecked: false
        }
    }

    handleChange = event => {
        this.setState({ checkboxChecked: !this.state.checkboxChecked })
        this.setState({ recruitFilter: event.target.value }, function () {
        (true === this.state.checkboxChecked) ? 
            this.setState({ selectedRecruit: this.state.allRecruitData.filter(recruit =>
                recruit.recruit_id == this.state.recruitFilter) }, function () {
                    console.log(this.state.selectedRecruit)
                })
            :
            this.setState({ selectedRecruit: [] })
        });
    }

    positionChanged = event => {
        this.setState({ positionFilter: event.target.value },
            function () { this.applyFilter(this.state.positionFilter, this.state.levelFilter, this.state.statusFilter) });
    }

    levelChanged = event => {
        this.setState({ levelFilter: event.target.value },
            function () { this.applyFilter(this.state.positionFilter, this.state.levelFilter, this.state.statusFilter) });
    }

    statusChanged = event => {
        this.setState({ statusFilter: event.target.value },
            function () { this.applyFilter(this.state.positionFilter, this.state.levelFilter, this.state.statusFilter) });
    }

    applyFilter = (position, level, status) => {
        if (0 == position && 0 == level && 0 == status) {
            this.setState({ filteredRecruits: this.state.allRecruitData });
        }
        else if (0 != position && 0 == level && 0 == status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.position_id == position) });
        }
        else if (0 == position && 0 != level && 0 == status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.level_id == level) });
        }
        else if (0 == position && 0 == level && 0 != status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.current_status == status) });
        }
        else if (0 != position && 0 != level && 0 == status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.position_id == position).filter(recruit =>
                    recruit.level_id == level) });
        }
        else if (0 == position && 0 != level && 0 != status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.level_id == level).filter(recruit =>
                    recruit.current_status == status) });
        }
        else if (0 != position && 0 == level && 0 != status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.position_id == position).filter(recruit =>
                    recruit.current_status == status) });
        }
        else if (0 != position && 0 != level && 0 != status) {
            this.setState({ filteredRecruits: this.state.allRecruitData.filter(recruit =>
                recruit.position_id == position).filter(recruit =>
                    recruit.level_id == level).filter(recruit =>
                        recruit.current_status == status) });
        }
    }

    componentWillMount() {
        let viewRecruits = "/viewRecruits"
        let schoolInfo = "/schoolTableView"

        const requestOne = axios.post(viewRecruits);
        const requestTwo = axios.post(schoolInfo);

        axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
            this.setState({ allRecruitData: responses[0].data })
            this.setState({ filteredRecruits: responses[0].data })
            this.setState({ schoolInfo: responses[1].data })
        })).catch(errors => {
            console.log(errors)
        });
    }

    componentDidUpdate() {
    }

    render() {
        return(
            <div className="grid-container">
                <div className="drop-downs">
                    <PositionDropDown onChange={ this.positionChanged } />
                    <LevelDropDown onChange={ this.levelChanged } />
                    <StatusDropDown onChange={ this.statusChanged } />
                </div>
                <TabView className="tab-view"
                            handleChange={ this.handleChange }
                            recruits={ this.state.filteredRecruits }
                            schools={ this.state.schoolInfo } />
            </div>
        );
    }
}

export default RecruitView;