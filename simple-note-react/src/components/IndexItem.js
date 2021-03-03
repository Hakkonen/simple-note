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
        </div>
    )
}

// style={props.index !== 1 ? {borderTop: "1px solid black"} : {border: ""}}

export default IndexItem