import React, { Component } from 'react'
import './Location.css'

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div className="location" key={location.id}>
                            <h3>{location.name}</h3>
                            <section>{location.address}</section>
                        </div>
                    )
                }
            </section>
        );
    }
}


    

