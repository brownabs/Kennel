import Settings from "./Settings"

export default {
  getSpecificAnimal(id) {
    return fetch(`${Settings.remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAllAnimals() {
    return fetch(`${Settings.remoteURL}/animals`).then(e => e.json())
  }
}

