import React, { Component } from 'react'
import Animal from './Animal'


/*
    PURPOSE: AnimalList.js component 
    line 18. maps through the animal array 
    line 19. gives it an key/"id" of `animal-${animal.id}`
         20. then using the Animal (vitual html element) Component, stores animal as a variable. 
         24. Because AnimalList is a child component of Application Views it requires calling on dischargeAnimal to 
             pass down to Animal.js. 
         25. stores owners in an object: takes the AnimalOwner array and filters though the animal owners to find a matching animal.id 
         28. maps through filtered array I NEED LINE 28 EXPLAINED TO ME *** chaining methods 
         30. finds the owner id and see if it matches an id in the ownershipArray
*/
export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={`animal-${animal.id}`}>
                        <Animal animal={animal} //animal and owner are single objects that is used by the Animal component
                        dischargeAnimal={this.props.dischargeAnimal}
                            owners={ 
                                this.props.animalOwners
                                    .filter(ao => ao.animalId === animal.id)
                                    .map(ownershipArray => this.props.owners //ownershipArray is the new array made by filter method, how does that interact with this.props.owners
                                    .find(owner => owner.id === ownershipArray.ownerId).name)
                                } />
                    </div>
                )
            }
            </section>
        )
    }
}


