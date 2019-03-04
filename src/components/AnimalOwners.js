import React, { Component } from 'react'


//purpose: WHERE AM I IMPORTING ANIMALOWNER
//gets the animalOwners array and maps though each animal owner array and this goes through 

//MAP used for transforming items in one array to a different structure and storing the new items in another array
//FIND it iterates over the array & as soon as it finds ONE item, that passes the condition, it returns that item
// otherwise it returns an undefined 
//every() method determines if every item in an array passes a condition 
//reverse reverses the order of items in an array 


class AnimalOwners extends Component {
    render() {

        return (
            <section>
                {
                    this.props.animalOwners.map(ao =>
                        <div>
                            {
                                // this.props.owners.find(
                                //     o => o.id === ao.ownerId
                                // ).name

                            }
                        </div>
                    )
                }
            </section>
        )
    }
}

export default AnimalOwners