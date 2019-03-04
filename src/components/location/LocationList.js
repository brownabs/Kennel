import React, { Component } from 'react'

//<h3> is not HTML just a JSX expression
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


    

