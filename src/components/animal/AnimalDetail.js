import React, { Component } from "react"
// import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
            OR then empty object, could be filled in object as 404 if you wanted to. 404 error makes sense to me
        */
        const animal = this.props.animals.find(a => 
            a.id === parseInt(this.props.match.params.animalId)) 
            || {id:404, name:"404", breed: "Dog not found in kennel"}

        return (
            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                    <h4 className="card-title">{ animal.name } { animal.breed }</h4> 

                        <button
                            onClick={() => this.props.dischargeAnimal(animal.id)
                                            .then(() => this.props.history.push("/animals"))}
                            className="card-link">Discharge Animal</button>
                    </div>
                </div>
            </section>
        )
    }
}

