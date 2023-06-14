const url = "http://localhost:8080"

export default class ProfileManager {
    key;
    dcID;

    constructor(key, dcID) {
        this.key = key
        this.dcID = dcID
    }

    getHeaders() {
        return {
            "API-Version": "MUtils-API-1.1",
            "key": this.key,
            "id": this.dcID,
        };
    }

    async getStyles() {
        let res = await fetch(url + "/account/color/get", {
            headers: this.getHeaders()
        })
        let data = await res.json()
        return data
    }

    async setStyle(type) {
        let res = await fetch(url + "/account/color/set", {
            headers: {...this.getHeaders(), "NewType": type},
        })
    }


    async getAccountInfo() {
        let res = await fetch(url + "/account/general", {
            headers: this.getHeaders()
        })
        let data = await res.json()
        return data
    }

    async getConnections() {
        let res = await fetch(url + "/account/connections/get", {
            headers: this.getHeaders()
        })
        return await res.json()
    }

    async deleteConnection(ip) {
        let res = await fetch(url + "/account/connections/delete", {
            headers: {...this.getHeaders(), "ip": ip},
        })
    }

    async renameConnection(ip, name) {
        let res = await fetch(url + "/account/connections/rename", {
            headers: {...this.getHeaders(), "ip": ip, "name": name},
        })
    }

    async setMCName(name) {
        let res = await fetch(url + "/account/update-mc", {
            headers: {...this.getHeaders(), "name": name},
        })
        return await res.status === 202
    }
}