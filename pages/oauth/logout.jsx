import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginDataCache from "../../components/auth/LoginDataCache";

function LogOut() {
    const { push } = useRouter()

    useEffect(() => {
        push("/overview")
        localStorage.removeItem("dc_token")
        LoginDataCache.id = null
        LoginDataCache.username = null
        LoginDataCache.discriminator = null
        LoginDataCache.avatar = null
        LoginDataCache.banner = null
        LoginDataCache.email = null
        LoginDataCache.key = null
    }, []);

    return <>
        <span style={{color:"white"}}>Logging out...</span>
    </>
}

export default LogOut