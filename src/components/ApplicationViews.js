import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


/*Navbar.js: This is a Presentation Component. Directly expresses HTML.
ApplicationViews.js: This is a Controller Component. Its only responsibility 
to to control the behavior of the system. It maps URLs to components.
In the ApplicationViews component, you will define how your application will 
respond when the URL matches each of those patterns. When a user clicks on one 
of the hyperlinks in the navigation bar, this code dictates which component should 
be rendered*/

class ApplicationViews extends Component {
    
    // querying the entire API and populate this data structure
    state = {
        owners: [],
        animalOwners: [],
        employees: [],
        locations: [],
        animals: []
    }

    /* In React, retrieving state from a remote API works in, what seems like, a counterintuitive way. 
       React must first render the component to the DOM without any data, then you will request the data 
       and re-render the component. The componentDidMount() hook runs after the component output has been 
       rendered to the DOM, so if your component needs API data, that is the place to do it. Here is how you 
       would write it to retrieve animal data and employee data from an API being served by json-server on port 5002.
       THE CODE BELOW
       used the fetch API in JavaScript to query your API, then serialize the response as a JSON object, then take 
       the JSON object and set the state of your component.*/

       componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => this.setState(newState))
    }



    /*  exact is needed on the first route, otherwise it will also match the other two routes, 
        and the LocationList will be the only component rendered, no matter what the URL is
        The <Link/> and the <Route/> JSX elements are complementary to each other. 
        If you add a new Link element in your application with a new URL, then you must create a matching Route element.*/


    render() {
        return (
            <React.Fragment>
                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                                       owners={this.state.owners}
                                       animalOwners={this.state.animalOwners}
                     />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews