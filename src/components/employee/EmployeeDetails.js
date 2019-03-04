import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    render() {

        const employee = this.props.employees.find(e => 
            e.id === parseInt(this.props.match.params.employeeId)) //employeeId is named in route URL in ApplicationView
            || {id:404, name:"404--EMPLOYEE NOT FOUND"}
        return (
            <section className="employees">
            
                 <div key={employee.id} className="employee-card">
                    <div className="card-body">
                        <h4 className="card-title">{employee.name}</h4> 
                            <button onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                            >Fire</button>
                        
                    </div>
                </div>
            </section>
        )
    }
}