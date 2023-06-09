import LoginDataCache from "./LoginDataCache";

export function loadData(token, callback) {
    httpGetAsync("https://api.mutils.net/dc/getData", token, (response) => {
        console.info("Received account data to process...")
        const data = JSON.parse(response)
        console.debug(data)
        const id = data["id"]
        if (id == null || id === "null") {
            console.warn("Failed to login!")
            return
        }
        LoginDataCache.id = id
        LoginDataCache.username = data["username"]
        LoginDataCache.discriminator = data["discriminator"]
        LoginDataCache.avatar = data["avatar"]
        LoginDataCache.banner = data["banner"]
        LoginDataCache.email = data["email"]
        LoginDataCache.key = data["mutilsKey"]
        callback()
    })

    function httpGetAsync(url, token, callback) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.setRequestHeader('token', token)
        xmlHttp.send("  ");
    }
}