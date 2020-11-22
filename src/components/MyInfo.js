import React from "react"
import ToDo from "./ToDo"
import ContentCard from "./ContentCard";

export default MyInfo

const styles = {
    color: "#FF798F",
    fontSize: "70px"
}

function MyInfo() {
    const firstName= "Ebaa"
    const secondName = "Bassoumi"
    const date = new Date()
    const hours = date.getHours();
    let timeOfDay

    if(hours < 12 ){
        timeOfDay = "Morning"
        styles.color = "#312082"
    } else if( hours >= 12 && hours < 17 ){
        timeOfDay = "Afternoon"
        styles.color = "#24610F"
    } else if( hours >= 17){
        timeOfDay = "Evening"
        styles.color = "#F1098F"
    }
    return (
        <div>
            <h1 className="navbar">Welcome to my world!</h1>
            <h2 style={styles}> Good {timeOfDay}</h2>
            <ContentCard
                content={{
                    imgUrl : "http://placekitten.com/200/300",
                    name :"Felix",
                    phone : "+49 162 953 9724",
                    email : "eba.basem@gmail.com"
                }}
            />
            <ContentCard
                content={{
                    imgUrl:"http://placekitten.com/200/600",
                    name:"Tmat",
                    phone:"+49 162 953 9724",
                    email:"eba.basem@gmail.com"
                }}
            />
            <ContentCard
                content={{
                    imgUrl : "http://placekitten.com/300/400",
                    name : "Lolite",
                    phone : "+49 162 953 9724",
                    email :"eba.basem@gmail.com",
                }}
            />
            <p>Here is my to do list</p>
            <ToDo></ToDo>
        </div>
    )
}

