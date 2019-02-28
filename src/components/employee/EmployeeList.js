import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button onClick={() => {
                                this.props.fireEmployee(employee.id)
                            }}
                        >Fire</button>
                    </div>
                )
            }
            </section>
        )
    }
}




