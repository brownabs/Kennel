import Settings from "./Settings"

export default {
  getSpecificOwner(id) {
    return fetch(`${Settings.remoteURL}/owners/${id}`).then(e => e.json())
  },
  getAllOwners() {
    return fetch(`${Settings.remoteURL}/owners`).then(e => e.json())
  }
}