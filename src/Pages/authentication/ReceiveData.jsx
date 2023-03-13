import LoginDataCache from "./LoginDataCache";

export function loadData(token, callback) {
    httpGetAsync("https://discord.com/api/users/@me", token, (response) => {
        console.info("Received account data to process...")
        const data = JSON.parse(response)
        console.log(data)
        LoginDataCache.id = data["id"]
        LoginDataCache.username = data["username"]
        LoginDataCache.discriminator = data["discriminator"]
        LoginDataCache.avatar = data["avatar"]
        LoginDataCache.banner = data["banner"]
        LoginDataCache.email = data["email"]
        callback()
    })

    function httpGetAsync(url, token, callback) {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + token)
        xmlHttp.send(null);
    }
}