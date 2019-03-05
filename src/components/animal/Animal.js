import React, { Component } from 'react'
import { Link } from "react-router-dom"
import dog from './dog.png'
import './animal.css'

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
                    <div className="animal-card-body">
                    <img src={dog} className="icon--dog" alt="dog"/>
                    <h4 className="animal-card-title">{this.props.animal.name}</h4>
                    <h6 className="animal-card-title">{this.props.animal.breed}</h6>
                
                    <div className="ownerList">Owned By: {this.props.owners.join(", ")}</div>
                    <Link className="animal-nav-link" to={`/animals/${this.props.animal.id}`}>
                        <h4 className="animal-detail-button">Details</h4></Link>
                    <button
                    onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                    className="animal-card-delete">Delete</button>
                </div>
            
                </div>
            </section >
        )
    }
}

