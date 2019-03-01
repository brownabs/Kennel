import Settings from "./Settings"

export default {
  getSpecificAnimalOwner(id) {
    return fetch(`${Settings.remoteURL}/animalOwners/${id}`).then(e => e.json())
  },
  getAllAnimalsOwners() {
    return fetch(`${Settings.remoteURL}/animalOwners`).then(e => e.json())
  }
}