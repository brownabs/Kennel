import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

/* Navbar.js: This is a Presentation Component. Directly expresses HTML.
ApplicationViews.js: This is a Controller Component. Its only responsibility 
to to control the behavior of the system. It maps URLs to components.

The <Link/> and the <Route/> JSX elements are complementary to each other. 
If you add a new Link element in your application with a new URL, then you must create a matching Route element. */

class NavBar extends Component {
    render() {
        return (
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
                </ul>
            </nav>
        )
    }
}

export default NavBar