import React, { Component } from 'react'
import './Animal.css'

export default class Animal extends Component {
    render() {
        return (
            <section className="animal">
                <div>
                    { this.props.animal.name } { this.props.animal.type }
                </div>
                <div>Owned By: {
                    this.props.owners.join(", ")
                }
                </div>
            </section>
        )
    }
}

