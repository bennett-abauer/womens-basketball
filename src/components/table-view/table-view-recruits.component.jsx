import React from "react";
import TableView from "react-table-view";

import "./table-view.styles.scss";

class RecruitTable extends React.Component {

    render() {
        const DATA = [
            { id: 0, make: "Honda", model: "NSX", year: "1997" },
            { id: 1, make: "Toyota", model: "Supra", year: "1996" },
            { id: 2, make: "Nissan", model: "300ZX", year: "1998" }
        ]

        let COLUMNS = {
            make: function(data) {
                return <span>{ data.year }</span>
            },
            model: function(data) {
                return <span>{ data.model }</span>
            },
            year: function(data) {
                return <span>{ data.year }</span>
            }
        }

        return (
            <div>
                <TableView data={ DATA } columns={ COLUMNS } />
            </div>
        )
    }
}

export default RecruitTable;