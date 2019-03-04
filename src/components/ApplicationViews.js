import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import OwnerManager from '../modules/OwnerManager';
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import AnimalOwnerManager from '../modules/AnimalOwnerManager';


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
        animalOwners: []
    }
    dischargeAnimal = (id) => {
        fetch(`http://localhost:5002/animals/${id}`, {
            method : "DELETE"
        })
        .then(() => fetch("http://localhost:5002/animals"))
        .then(r => r.json())
        .then(animals => this.setState({ animals: animals }))
    }

    dischargeOwner= (id) => {
        fetch(`http://localhost:5002/owners/${id}`, {
          method : "DELETE"
        })
        .then(() => fetch("http://localhost:5002/owners"))
        .then(r => r.json())
        .then(owners => this.setState({ owners : owners}))
        .then(animals => this.setState({ animals: animals }))
        .then(() => fetch("http://localhost:5002/AnimalOwners"))
        .then(r => r.json())
        .then(animalOwners => this.setState({ animalOwners: animalOwners }))
    }

    fireEmployee = (id) => {
        fetch(`http://localhost:5002/employees/${id}`, {
            method : "DELETE"
        })
        .then(() => fetch("http://localhost:5002/employees"))
        .then(r => r.json())
        .then(employees => this.setState({ employees: employees }))
    }

    getAllAnimalsAgain =  () => {
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => this.setState({ animals: animals }))
    }

    componentDidUpdate () {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        const newState = {}
        
        AnimalManager.getAllAnimals()
        .then(animals => newState.animals = animals)

        OwnerManager.getAllOwners()
        .then(owners => newState.owners = owners)
        
        EmployeeManager.getAllEmployees()
        .then(employees => newState.employees = employees)

        LocationManager.getAllLocations()
        .then(locations => newState.locations = locations)
 
        AnimalOwnerManager.getAllAnimalsOwners()
        .then(animalOwners => newState.animalOwners = animalOwners)
        .then(() => this.setState(newState))
    }

        /*  exact is needed on the first route, otherwise it will also match the other two routes, 
        and the LocationList will be the only component rendered, no matter what the URL is
        The <Link/> and the <Route/> JSX elements are complementary to each other. 
        If you add a new Link element in your application with a new URL, then you must create a matching Route element.*/
        //state includes any data that the component needs
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
                                       dischargeAnimal={this.dischargeAnimal}
                                       loadAnimals={this.getAllAnimalsAgain} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                    fireEmployee={this.fireEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} 
                                      dischargeOwner={this.dischargeOwner}
                    
                    />
                }} />
            </React.Fragment>
        )
    }
}






