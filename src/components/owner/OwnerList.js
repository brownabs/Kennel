import React, { Component } from 'react'



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
                    </div>
                )
            }
            </section>
        )
    }
}


export default OwnerList