import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom"; // TODO: useRouter
import { loadData } from "../../components/auth/ReceiveData"

function Callback() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("t")
        if (token == null || token === "null") {
            console.warn("Failed to process token!")
            // localStorage.removeItem("dc_token")
            // LoginDataCache.id = null
            // LoginDataCache.username = null
            // LoginDataCache.discriminator = null
            // LoginDataCache.avatar = null
            // LoginDataCache.banner = null
            // LoginDataCache.email = null
            // window.location.replace("/overview")
        } else {
            console.info("Received token to process... - " + token)
            localStorage.setItem("dc_token", token)
            searchParams.set("t", null)
            console.info("Storage - " + localStorage.getItem("dc_token"))
            loadData(token, () => { navigate("/overview") })
        }
    }, []);


    return <>
        <span style={{color:"white"}}>Processing response...</span>
    </>
}

export default Callback