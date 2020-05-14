import React from "react";
import axios from "axios";

import "./table-view.styles.scss";

class RecruitTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recruitData: []
        }
    }

    componentDidMount() {
        axios
        .post("/viewRecruits")
        .then(response => response.data).then(data => {
            this.setState({ recruitData: data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    componentDidUpdate() {
        console.log(this.state.recruitData);
    }

    render() {

        return(
            <table>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
                { this.state.recruitData.map(recruit => {
                    return (
                    <tr>
                        <td>{ recruit.last_name }</td>
                        <td>{ recruit.first_name }</td>
                        <td>{ recruit.address }</td>
                        <td>{ recruit.phone_number }</td>
                        <td>{ recruit.email }</td>
                    </tr>
                )})}
            </table>
        );
    }
}

export default RecruitTable;