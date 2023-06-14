import {useEffect} from "react";
import {useRouter} from "next/router";
import LoginDataCache from "../../components/auth/LoginDataCache";
import {loadData} from "../../components/auth/ReceiveData";


Callback.getInitialProps = async ({ query }) => {
    const token = query.t;
    return { token };
};

function Callback({token}) {
    const router = useRouter()

    useEffect(() => {
        if (token == null || token === "null") {
            console.info("Failed to process token!")
            localStorage.removeItem("dc_token")
            LoginDataCache.id = null
            LoginDataCache.username = null
            LoginDataCache.discriminator = null
            LoginDataCache.avatar = null
            LoginDataCache.banner = null
            LoginDataCache.email = null
            LoginDataCache.key = null
        } else {
            console.info("Received token to process... - " + token)
            localStorage.setItem("dc_token", token)
            loadData(token, () => { router.push('/profile') })
        }
    }, []);


    return <>
        <span style={{color: "white"}}>Processing response...</span>
    </>
}

export default Callback