import React from 'react';
import DisplayBox from "../DisplayBox";
import Link from "next/link";

const StyleList = ({colors, onSelect}) => {

    function getImg(i) {
        return <div className="style-example" style={{height: "7.5rem"}}>
            <div style={{fontWeight: "bold", fontSize: "1.6em"}}
                 dangerouslySetInnerHTML={{__html: i.color}}/>
            <div style={{fontSize: "1.2rem"}}
                 dangerouslySetInnerHTML={{__html: i.colorSec}}/>
        </div>;
    }

    return (
        <>
            <div className="section-header">Styles</div>
            <div className="text-image-box" style={{marginBottom: '-1rem', marginTop: '1rem'}}>
                <div className="box-text">
                    <span>Styles are unique color schemes that change the way your MUtils look!<br/>
                    You can collect more styles by participate in events on our </span>
                    <a href="https://dc.mutils.net" className="text-link" target="_blank">Discord</a>
                    <span>{" or support us by purchasing a licence or using any donating option."}<br/>{"Click "}</span>
                    <Link href="/styles" className="text-link">here</Link>
                    <span>{" to see all available styles!"}</span>
                </div>
            </div>
            {/*<h2 className={"connection-header"} style={{margin: '8rem 0 1rem 0'}}>Styles</h2>*/}
            <div className="display-grid" style={{width: "100%"}}>
                {colors.availableStyles.map(i =>
                    <div className={colors.selected === i.type ? "selected-style" : ""}
                         onClick={() => onSelect(i.type)} key={i.name}>
                        <DisplayBox
                            key={i.type}
                            name={i.name} desc={i.desc} tags={null}
                            imgType={"RAW"} img={getImg(i)}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default StyleList;
