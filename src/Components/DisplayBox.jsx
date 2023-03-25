import {useEffect, useState} from "react";
import "../Styles/popup.css";
import NotFound from "../Images/mc/grab/barrier.png";
import Warning from "../Images/question_mark.svg";
import Tags from "./Variables/Tags";
import Popup from "reactjs-popup";

function DisplayBox(props) {
    const [image, setImage] = useState(NotFound);
    const [imageClass, setImageClass] = useState("display-image");

    function getTags() {
        if (props.tags == null || props.tags.isEmpty) return
        return props.tags.map(function (it) {
            const tagData = Tags.tags[it]
            if (tagData == null) {
                return <div>
                    <img src={Warning} alt="missing" className="display-tag tooltip" key={it} style={{borderColor:"rgba(96, 138, 255, 1)",backgroundColor:"rgba(96, 138, 255, 0.3)"}}/>
                </div>
            }
            return (
                <Popup trigger={open => (<img src={tagData.img} alt="tag" className="display-tag tooltip" style={{borderColor:tagData.color}}/>)} key={it}
                       position="right center"
                       on={['hover', 'focus']}
                       closeOnDocumentClick>
                    <span>Tag ⇒ {it}</span>
                </Popup>
             )
        })
    }

    function getDescription() {
        const desc = props.desc
        if (desc == null) return "Empty"
        if (desc.length > 60) {
            return desc.substring(0, 60) + "..."
        } else return desc
    }

    useEffect(() => {
        if (image !== NotFound) return
        switch (props.imgType) {
            case "URL":
                setImage(props.img)
                break
            case "RENDER":
                try { // Try a block render
                    setImage(require("../Images/mc/grab/rendered/" + props.img + ".png"))
                } catch (e) {
                    try { // Try an item render
                        setImage(require("../Images/mc/grab/items/" + props.img + ".png"))
                        setImageClass("display-image pixel")
                    } catch (e) { // Fails
                        console.error("Failed to render image " + props.img + "!")
                    }
                }
                break
            default:
        }
    }, []);

    return <div className="display-container scroller scroller-wait" onClick={() => {

    }}>
        <div className="display-title">{props.name}</div>
        <div className="display-mid">
            <div className="display-tags">{getTags()}</div>
            <img src={image} alt={"Challenge Icon"} className={imageClass}/>
        </div>
        <Popup trigger={open => (<div className="display-data-box">{getDescription()}</div>)}
               position="top center"
               on={['hover', 'focus']}
               closeOnDocumentClick
               contentStyle={{textAlign:"center"}}>
            <span>{props.desc}</span>
        </Popup>

    </div>
}

export default DisplayBox