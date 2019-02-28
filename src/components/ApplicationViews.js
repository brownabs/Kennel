import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

// /*Navbar.js: This is a Presentation Component. Directly expresses HTML.
// ApplicationViews.js: This is a Controller Component. Its only responsibility 
// to to control the behavior of the system. It maps URLs to components.
// In the ApplicationViews component, you will define how your application will 
// respond when the URL matches each of those patterns. When a user clicks on one 
// of the hyperlinks in the navigation bar, this code dictates which component should 
// be rendered*/
export default class ApplicationViews extends Component {

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: [],
        relationships: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/animalOwners")
            .then(r => r.json()))
            .then(animalOwners => newState.animalOwners = animalOwners)
            .then(() => this.setState(newState))
    }

        /*  exact is needed on the first route, otherwise it will also match the other two routes, 
        and the LocationList will be the only component rendered, no matter what the URL is
        The <Link/> and the <Route/> JSX elements are complementary to each other. 
        If you add a new Link element in your application with a new URL, then you must create a matching Route element.*/
        
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                                relationships={this.state.animalOwners}
                                owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}






