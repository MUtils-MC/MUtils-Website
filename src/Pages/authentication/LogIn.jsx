import {useEffect} from "react";

function OAuth() {
    const url = "http://localhost:8080/dc/redirect?app=mutils"

    console.log(url)

    useEffect(() => {
        window.location.replace(url)
    }, []);

    return <>
        <span style={{color:"white"}}>Redirecting to discord.com...</span>
    </>
}

export default OAuth