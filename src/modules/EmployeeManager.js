import Settings from "./Settings"

export default {
    getSpecificEmployee(id) {
        return fetch(`${Settings.remoteURL}/employees/${id}`).then(e => e.json())
    },
    getAllEmployees() {
        return fetch(`${Settings.remoteURL}/employees`).then(e => e.json())
    },
    addNewEmployee(newEmployee) {
        return fetch(`${Settings.remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    }
}
