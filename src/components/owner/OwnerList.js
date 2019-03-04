import React, { Component } from 'react'
import { Link } from "react-router-dom"



class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}<br />
                        {owner.phone}
                        <button onClick={() => {
                                this.props.dischargeOwner(owner.id)
                            }}
                        >Couldn't Pay</button>
                           <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                    </div>
                )
            }
            </section>
        )
    }
}


export default OwnerList