import React, { Component } from 'react'
import house from './house.png'
import './location.css'

//<h3> is not HTML just a JSX expression
export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                {
                    this.props.locations.map(location =>
                        <div className="location" key={location.id}>
                         <img src={house} className="icon--house" alt="house"/>
                            <h4>{location.name}</h4>
                            <section>{location.address}</section>
                        </div>
                    )
                }
            </section>
        );
    }
}


    

