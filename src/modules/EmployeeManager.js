import Settings from "./Settings"

export default {
  getSpecificEmployee(id) {
    return fetch(`${Settings.remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAllEmployees() {
    return fetch(`${Settings.remoteURL}/employees`).then(e => e.json())
  }
}