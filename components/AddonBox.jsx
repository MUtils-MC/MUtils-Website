import Tags from "./Variables/Tags";
import Warning from "./Images/question_mark.svg";
import Popup from "reactjs-popup";
import {useEffect, useState} from "react";

function DisplayBox(props) {
    const [image, setImage] = useState("");

    function getTags() {
        if (props.tags == null || props.tags.isEmpty) return
        return props.tags.map(function (it) {
            const tagData = Tags.tags[it]
            if (tagData == null) {
                return <div>
                    <img src={Warning} alt="missing" className="display-tag tooltip" key={it} style={{borderColor: "rgba(96, 138, 255, 1)", backgroundColor: "rgba(96, 138, 255, 0.3)"}}/>
                </div>
            }
            return (
                <Popup trigger={open => (<img src={tagData.img} alt="tag" className="display-tag tooltip" style={{borderColor: tagData.color}}/>)} key={it}
                       position="right center"
                       on={['hover', 'focus']}
                       closeOnDocumentClick>
                    <span>Tag ⇒ {it}</span>
                </Popup>
            )
        })
    }

    function getTextTags() {
        if (props.tags == null || props.tags.isEmpty) return
        return props.tags.map((it) => {
            const tagData = Tags.tags[it]
            return <div>
                <img src={tagData.img} alt="tag" style={{filter: 'invert(1.0)', margin: '0 0 -2px 5px', width: '18px'}}/>
                <span style={{padding: '0 10px 0 0', fontSize: '15px'}}>{fancyString(it)}</span>
            </div>
        })
    }

    function getAuthors() {
        if (props.authors == null) return <span>Unknown</span>
        return props.authors.map((it) => {
            return <span style={{margin: '2px 0 0 10px', fontSize: '15px'}}>{it}</span>
        })
    }

    function getVersions() {
        if (props.version == null) return <span>Unknown</span>
        const from = props.version["from"]
        const to = props.version["to"]
        if (to == null) return <span>{from}</span>
        if (from == null) return <span>{to}</span>
        return <span style={{margin: '2px 0 0 10px', fontSize: '15px'}}>{from + " - " + to}</span>
    }

    function getBannerColor() {
        if (props.banner == null) return "#18b800"
        return props.banner
    }

    function fancyString(input) {
        let final = input[0]
        final += input.substring(1).toLowerCase()
        return final
    }

    function getDescription() {
        const desc = props.desc
        if (desc == null) return "Empty"
        if (desc.length > 60) {
            return desc.substring(0, 60) + "..."
        } else return desc
    }

    function getDownloads() {
        if (props.downloads == null) return
        const modrinthDownload = props.downloads["modrinth"]
        const cfDownload = props.downloads["cf"]
        const ghDownload = props.downloads["github"]
        const buttons = []
        if (modrinthDownload != null) buttons.push((<Button type="Modrinth" url={modrinthDownload}/>))
        if (cfDownload != null) buttons.push((<Button type="CurseForge" url={cfDownload}/>))
        if (ghDownload != null) buttons.push((<Button type="GitHub" url={ghDownload}/>))
        return buttons
    }

    function getLoaderImg() {
        if (props.loader === "FABRIC") return "/images/svg/paper.svg"
        else return "/images/svg/paper.svg"
    }

    useEffect(() => {
        setImage(props.img)
    }, [])

    return <Popup className="addons"
                  trigger={
                      <div className="display-container scroller scroller-wait" key={"addon-" + props.name}>
                          <div className="display-title">{props.name}</div>
                          <div className="display-mid">
                              <div className="display-tags">{getTags()}</div>
                              <img src={image} alt={"Addon Icon"} className="display-image" onError={(element) => {
                                  setImage("/images/mc/grab/barrier.png")
                              }}/>
                          </div>
                          <Popup trigger={open => (<div className="display-data-box">{getDescription()}</div>)}
                                 position="top center"
                                 on={['hover', 'focus']}
                                 closeOnDocumentClick
                                 contentStyle={{textAlign: "center"}}>
                              <span>{props.desc}</span>
                          </Popup>

                      </div>
                  }
                  modal nested
    >
        {close => (<div className="addon-popup">
                <button className="close" onClick={close}>&times;</button>
                <div className="banner" style={{backgroundColor: getBannerColor()}}/>
                <img className="logo" src={image} alt="Addon Logo" onError={(element) => {
                    setImage("/images/mc/grab/barrier.png")
                }}/>
                <div className="loader">
                    <img src={getLoaderImg()} alt={props.loader} className="loader-icon"/>
                    <span>{props.loader}</span>
                </div>
                <div className="header">{props.name}</div>
                <div className="description">{props.desc}</div>
                <div className="tags">
                    <span style={{fontWeight: 'bold'}}>Tags ⇒</span>
                    {getTextTags()}
                </div>
                <div className="tags">
                    <span style={{fontWeight: 'bold'}}>Authors ⇒</span>
                    {getAuthors()}
                </div>
                <div className="tags">
                    <span style={{fontWeight: 'bold'}}>Version ⇒</span>
                    {getVersions()}
                </div>
                <div className="description"></div>
                <div className="downloads">
                    {getDownloads()}
                </div>
            </div>
        )}
    </Popup>
}

function Button(props) {
    function getImage() {
        switch (props.type) {
            case "Modrinth": return  "/images/svg/modrinth.svg"
            case "CurseForge": return "/images/svg/curseforge.svg"
            case "GitHub": return "/images/svg/github.svg"
        }
    }

    return <a className="download-button" href={props.url} target="_blank">
        <img src={getImage()} alt={props.type} style={{width: '30px', margin: '0 10px -10px 0', filter: 'invert(4%) sepia(3%) saturate(3141%) hue-rotate(202deg) brightness(92%) contrast(89%)'}}/>
        <span style={{fontWeight: 'bold', fontSize: '15px'}}>{props.type}</span>
    </a>
}

export default DisplayBox