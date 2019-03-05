import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Animal from '../animal/Animal';
import './employee.css'



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
                    <div className="employeeList" key={employee.id}>
                        {employee.name}
                        <button className="fireButton" 
                                onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                        >Fire</button>
                         <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                               <div className="animals--caretaker">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === employee.id)
                                    .map(anml => <Animal key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}




