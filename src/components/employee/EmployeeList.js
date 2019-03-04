import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="employeeButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/employees/new")}
                    }> Add New Employee
            </button>
            </div>
            <section className="employees">
            {this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                        >Fire</button>
                        <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>

                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}




