import {scrollEffect} from "../../components/Effects";
import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import {useContext, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "../../components/Footer";


function MarkdownTest() {
    const [markdown, setMarkdown] = useState();
    useEffect(scrollEffect)

    function handleChange(event) {
        setMarkdown(event.target.value)
    }

    return <>
        <Navbar current="/test/markdown" />
        <TopScreen title="Markdown"/>
        <div className="main-part">
            <div className="section-header" style={{padding: '2rem'}}>Markdown Testing</div>
            <div className="docs-box">
                <textarea className="text-area" onChange={handleChange}/>
            </div>
            <div className="docs-box">
                <ReactMarkdown className="markdown" children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
        <Footer/>
    </>
}

export default MarkdownTest