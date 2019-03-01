import React, { Component } from 'react'
import Animal from './Animal'



export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={`animal-${animal.id}`}>
                        <Animal animal={animal} //this is a single object that is used by the Animal component
                        dischargeAnimal={this.props.dischargeAnimal}
                            owners={
                                this.props.animalOwners
                                    .filter(ao => ao.animalId === animal.id)
                                    .map(ownershipArray => this.props.owners
                                    .find(owner => owner.id === ownershipArray.ownerId).name)
                                } />
                    </div>
                )
            }
            </section>
        )
    }
}


