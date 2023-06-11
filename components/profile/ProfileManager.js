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
        let res = await fetch("http://localhost:8080/account/color/get", {
            headers: this.getHeaders()
        })
        let data = await res.json()
        return data
    }

    async setStyle(type) {
        let res = await fetch("http://localhost:8080/account/color/set", {
            headers: {...this.getHeaders(), "NewType": type},
        })
    }


    async getAccountInfo() {
        let res = await fetch("http://localhost:8080/account/general", {
            headers: this.getHeaders()
        })
        let data = await res.json()
        return data
    }

    async getConnections() {
        let res = await fetch("http://localhost:8080/account/connections/get", {
            headers: this.getHeaders()
        })
        let data = await res.json()
        return data
    }

    async deleteConnection(ip) {
        let res = await fetch("http://localhost:8080/account/connections/delete", {
            headers: {...this.getHeaders(), "ip": ip},
        })
    }

}