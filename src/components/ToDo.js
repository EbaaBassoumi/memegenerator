import React from "react"


export default ToDo;

function ToDo(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"
                   name={"todo"}
                   checked={props.item.completed}
                   id={props.item.id}
                   onChange={() => props.handleChange()}/>
            <p>{props.item.text}</p>
        </div>
    )
}



