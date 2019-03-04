import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

/* Navbar.js: This is a Presentation Component. Directly expresses HTML.


The <Link/> and the <Route/> JSX elements are complementary to each other. 
If you add a new Link element in your application with a new URL, then you must create a matching Route element. */

class NavBar extends Component {
    render() {
        return (
            <div className="navContainer">
                <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to="/locations">Locations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/animals">Animals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/employees">Employees</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/owners">Owners</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar