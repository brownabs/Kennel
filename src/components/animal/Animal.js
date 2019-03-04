import React, { Component } from 'react'
import { Link } from "react-router-dom"


/*
    PURPOSE: Animal.js component holds the virtual DOM element of animal, animal name and type and using .join()
    only adds the owners to this element. 
    also includes the delete function to select animal by the id and then delete selected animal from API
*/

export default class Animal extends Component {
    render() {
        return (
            <section className="animal">

                <div key={this.props.animal.id} className="animal-card">
                    <div className="card-body">

                    <h4 className="card-title">{this.props.animal.name}</h4>
                    <h6 className="card-title">{this.props.animal.breed}</h6>
                
                    <div className="ownerList">Owned By: {this.props.owners.join(", ")}</div>
                <button
                    onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                    className="card-link">Delete</button>
                    </div>
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                </div>
            </section >
        )
    }
}

