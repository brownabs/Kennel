import Settings from "./Settings"

export default {
  getSpecificLocation(id) {
    return fetch(`${Settings.remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAllLocations() {
    return fetch(`${Settings.remoteURL}/locations`).then(e => e.json())
  }
}