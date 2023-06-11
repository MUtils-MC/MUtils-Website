import React from 'react';
import DisplayBox from "../DisplayBox";

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
            <h2 className={"connection-header"} style={{margin: '8rem 0 1rem 0'}}>Styles</h2>
            <div className="display-grid" style={{width: "100%"}}>
                {colors.availableStyles.map(i =>
                    <div className={colors.selected === i.type ? "selected-style" : ""}
                         onClick={() => onSelect(i.type)}>
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
