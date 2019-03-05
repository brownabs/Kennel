import React, { Component } from 'react'
import Animal from './Animal'



/*
    PURPOSE: AnimalList.js component 
    maps through the animal array 
    line  gives it an key/"id" of `animal-${animal.id}`
          then using the Animal (vitual html element) Component, stores animal as a variable. 
          Because AnimalList is a child component of Application Views it requires calling on dischargeAnimal to 
             pass down to Animal.js. 
          stores owners in an object: takes the AnimalOwner array and filters though the animal owners to find a matching animal.id 
          maps through filtered array I NEED LINE 28 EXPLAINED TO ME *** chaining methods 
          finds the owner id and see if it matches an id in the ownershipArray
*/
export default class AnimalList extends Component {
    render() {
        return (
            <React.Fragment>
            <h1 className="animal-page-title">Animals</h1>
            <div className="animalButton">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/animals/new")}
                    }> Admit Animal
            </button>
            </div> 
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={`animal-${animal.id}`}>
                        <Animal animal={animal} {...this.props}//animal and owner are single objects that is used by the Animal component
                        dischargeAnimal={this.props.dischargeAnimal}
                        {...this.props}
                        owners={this.props.owners}
                        {...this.props}
                        animalOwners={this.props.animalOwners}
                        {...this.props}
                        history={this.props.history}
                        />
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}


