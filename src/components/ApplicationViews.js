import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'

import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

import AnimalManager from '../modules/AnimalManager'
import OwnerManager from '../modules/OwnerManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import AnimalOwnerManager from '../modules/AnimalOwnerManager'

import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetails'
import OwnerDetail from './owner/OwnerDetails'

import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'

import Login from './authentication/Login'




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
            method: "DELETE"
        })
            .then(() => fetch("http://localhost:5002/animals"))
            .then(r => r.json())
            .then(animals => this.setState({ animals: animals }))
    }

    dischargeOwner = (id) => {
        fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch("http://localhost:5002/owners"))
            .then(r => r.json())
            .then(owners => this.setState({ owners: owners }))
            .then(animals => this.setState({ animals: animals }))
            .then(() => fetch("http://localhost:5002/AnimalOwners"))
            .then(r => r.json())
            .then(animalOwners => this.setState({ animalOwners: animalOwners }))
    }

    fireEmployee = (id) => {
        fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch("http://localhost:5002/employees"))
            .then(r => r.json())
            .then(employees => this.setState({ employees: employees }))
    }

    getAllAnimalsAgain = () => {
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => this.setState({ animals: animals }))
    }

    addAnimal = animal =>
        AnimalManager.addNewAnimal(animal)
            .then(() => AnimalManager.getAllAnimals())
            .then(animals =>
                this.setState({ animals: animals })
            )

    addEmployee = employee =>
        EmployeeManager.addNewEmployee(employee)
            .then(() => EmployeeManager.getAllEmployees())
            .then(employees =>
                this.setState({ employees: employees })
            )

    // Check if credentials are in local storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    componentDidUpdate() {
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
    //by adding AnimalDetail route By adding this route, you
    //  are setting up your application to view a single animal at a time, and you determine which 
    //  animal is to be viewed by looking in the URL. The animal's primary key will be the last part of the URL path.
    render() {
        return (

            <React.Fragment>
                <Route path="/login" component={Login} />

                <Route exact path="/locations" render={(props) => {
                    return <LocationList locations={this.state.locations} />

                }} />
                <Route exact path="/animals" render={(props) => {
                    
                    return <AnimalList {...props} animals={this.state.animals}
                        owners={this.state.owners}
                        animalOwners={this.state.animalOwners}
                        dischargeAnimal={this.dischargeAnimal}
                        loadAnimals={this.getAllAnimalsAgain} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} dischargeAnimal={this.dischargeAnimal} animals={this.state.animals} />
                }} />
                {/* <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} employees={this.state.employees}
                        fireEmployee={this.fireEmployee} />
                }} /> */}
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees}
                        locations={this.state.locations} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee} 
                                             animals={this.state.animals}
                                             owners={this.state.owners}
                                             employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                 
                    return <OwnerList owners={this.state.owners}
                        dischargeOwner={this.dischargeOwner} />
                   
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} dischargeOwner={this.dischargeOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}






