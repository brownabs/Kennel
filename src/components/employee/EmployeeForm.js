import React, { Component } from "react";


export default class EmployeeForm extends Component {
  // Set initial state, AnimalForm has it's own state//maintains state of input field as I update the input
  state = {
    name: "",
    locationId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewEmployee = evt => {
    evt.preventDefault();
    if (this.state.employees === "") {
      window.alert("Please enter an employee");
    } else {
      const employee = {
        name: this.state.name,
        locationId: parseInt(this.state.locationId)
        // Make sure the locationId is saved to the database as a number since it is a foreign key.
      }

      // Create the animal and redirect user to animal list
      this.props
        .addEmployee(employee)
        .then(() => this.props.history.push("/employees"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="employeeName">Employee name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Employee Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Assign to a location</label>
            <select
              defaultValue=""
              name="location"
              id="locationId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a location</option>
              {this.props.locations.map(l => (
                <option key={l.id} id={l.id} value={l.id}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewEmployee}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}