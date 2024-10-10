import {useEffect} from "react";
import {useRouter} from "next/navigation";

function DiscordRedirect() {
    const { push } = useRouter()

    useEffect(() => {
        push("/ch/info")
    })
}

export default DiscordRedirect