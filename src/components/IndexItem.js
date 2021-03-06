import React from "react"

function IndexItem(props) {
    return (
        <div 
            className="index-item" 
            onClick={props.OpenNote}
            id={props.index}
        >
            <h4 id={props.index}>{props.header}</h4>
            <p id={props.index}>{props.text}</p>
            <p style={{fontSize: ".8rem", margin: ".1rem 0 0 .1rem"}} id={props.index}>{props.date}</p>
        </div>
    )
}

// style={props.index !== 1 ? {borderTop: "1px solid black"} : {border: ""}}

export default IndexItem