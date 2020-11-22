import React from "react"

export default Jokes

function Jokes(props) {
    // console.log(props)
    // let myJoke=""
    // if(props.punchLine != null){
    //     myJoke="PunchLine: " + props.punchLine + " ";
    // }
    // if(props.question != null){
    //     myJoke=myJoke + "Question: " + props.question + " ";
    // }

    return(
        <div>
            <h3 style={{display:props.question ? "block": "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#cccccc" }}>Answer: {props.punchLine}</h3>
        </div>
    )
}