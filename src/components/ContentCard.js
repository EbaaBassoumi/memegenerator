import React from "react"

export default ContentCard;

function ContentCard(props) {
    console.log(props)
    return (
        <div className="content-card">
            <img src={props.content.imgUrl}/>
            <h3>{props.content.name}</h3>
            <p>Phone: {props.content.phone}</p>
            <p>Email: {props.content.email}</p>
        </div>

    )
}
