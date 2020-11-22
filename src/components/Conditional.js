import React from "react"

function Conditional(props) {
    console.log(props.isLoading)
    if(props.isLoading === true){
        return (
            <h1>Loading ...</h1>
        )
    }
        return (
            <h1>Hii</h1>
        )
}

export default Conditional