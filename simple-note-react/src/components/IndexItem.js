import React from "react"

function IndexItem(props) {
    return (
        <div className="index-item" >
            <h4>{props.header}</h4>
            <p>{props.text}</p>
        </div>
    )
}

// style={props.index !== 1 ? {borderTop: "1px solid black"} : {border: ""}}

export default IndexItem