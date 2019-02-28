import React, { Component } from 'react'


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

