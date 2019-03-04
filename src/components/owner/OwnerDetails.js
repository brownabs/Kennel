import React, { Component } from "react"

export default class OwnerDetail extends Component {
    render() {

        const owner = this.props.owners.find(o => 
            o.id === parseInt(this.props.match.params.ownerId)) //employeeId is named in route URL in ApplicationView
            || {id:404, name:"404--OWNER NOT FOUND"}
        return (
            <section className="owners">
            
                 <div key={owner.id} className="owner-card">
                    <div className="card-body">
                        <h4 className="card-title">{owner.name}</h4> 
                            <button onClick={() => {
                                this.props.dischargeOwner(owner.id)
                            }}
                            >Couldn't Pay</button>
                        
                    </div>
                </div>
            </section>
        )
    }
}