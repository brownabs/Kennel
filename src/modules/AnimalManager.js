import Settings from "./Settings"

export default {
  getSpecificAnimal(id) {
    return fetch(`${Settings.remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAllAnimals() {
    return fetch(`${Settings.remoteURL}/animals`).then(e => e.json())
  }, 
  addNewAnimal(newAnimal) {
    return fetch(`${Settings.remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  put(editedAnimal) {
    return fetch(`${Settings.remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}

