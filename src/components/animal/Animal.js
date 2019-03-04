import React, { Component } from 'react'

/*
    PURPOSE: Animal.js component holds the virtual DOM element of animal, animal name and type and using .join()
    only adds the owners to this element. 
    also includes the delete function to select animal by the id and then delete selected animal from API
*/
 //how does dischargeAnimal work? 
export default class Animal extends Component {
    render() {
        return (
            <section className="animal">
                <div> 
                    
                    { this.props.animal.name } { this.props.animal.type }
                </div>
                <div>Owned By: {
                    this.props.owners.join(", ")
                }</div>
                <button
                            onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                            className="card-link">Delete</button>
            </section>
        )
    }
}

