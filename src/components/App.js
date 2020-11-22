import React, {Component} from "react"
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";


function App() {

    return (
        <div>
            <Header></Header>
            <MemeGenerator></MemeGenerator>
        </div>

    )

}

export default App


// import React, {Component} from "react"
// import Footer from "./Footer";
// import MyInfo from "./MyInfo";
// import Intro from "./Intro";
// import Jokes from "./Jokes";
// import jokesData from "../data/jokesData";
// import productsData from "../data/productsData";
// import Product from "./Product";
// import Greeting from "./Greeting";
// import Header from "./Header";
//
// import ToDo from "./ToDo";
//
// import todosData from "../data/todosData";
//
// import Conditional from "./Conditional"
//
//
// class App extends Component {
//
//     constructor() {
//         super()
//         this.state = {
//             loading: true,
//             firstName: "",
//             lastName: "",
//             todos: todosData,
//             employee: {
//                 employee_age: 0,
//                 employee_name: "Ebaa Bassoumi",
//                 id: 0,
//                 employee_salary: 0,
//                 profile_image: ""
//             },
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleLogging = this.handleLogging.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     // componentDidMount() {
//     //     setTimeout(() => {
//     //         this.setState({
//     //             isLoading: false
//     //         })
//     //     }, 1500)
//     // }
//
//     componentDidMount() {
//         console.log("HI!!")
//         fetch("http://dummy.restapiexample.com/api/v1/employee/1")
//             .then(respone => respone.json())
//             .then(data => {
//                 console.log(data)
//                 this.setState(prevState => {
//                     return {
//                         loading: false,
//                         employee: data
//                     }
//                 })
//             })
//
//     }
//
//     handleLogging() {
//         this.setState(prevState => {
//             return {
//                 isLogged: !prevState.isLogged
//             }
//         })
//     }
//
//     handleChange(event) {
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
//     }
//
//     render() {
//         const text = this.state.loading ? "Loading .. " : this.state.employee.employee_name
//         return (
//             <form>
//                 <input
//                     type="text"
//                     value={this.state.firstName}
//                     name="firstName"
//                     placeholder="First Name"
//                     onChange={this.handleChange}
//                 />
//                 <br />
//                 <input
//                     type="text"
//                     value={this.state.lastName}
//                     name="lastName"
//                     placeholder="Last Name"
//                     onChange={this.handleChange}
//                 />
//                 {/*<Logging isLogged={this.state.isLogged} handleLogging={this.handleLogging}/>*/}
//
//                 <textarea
//                     value={"Some default value"}
//                     onChange={this.handleChange}
//                 />
//
//                 <br />
//
//                 <label>
//                     <input
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />
//                 <label>
//                     <input
//                         type="radio"
//                         name="gender"
//                         value="female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 {/* Formik */}
//                 <br />
//
//                 <label>Favorite Color:</label>
//                 <select
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="yellow">Yellow</option>
//                 </select>
//
//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//                 <h2>You are a {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor}</h2>
//                 <button>Submit</button>
//             </form>
//         )
//     }
//
// }
//
// export default App
//
//
// class Logging extends Component {
//
//     render() {
//         if (this.props.isLogged === true) {
//             return (
//                 <div>
//                     <h1>You are currently logged In</h1>
//                     <button onClick={this.props.handleLogging}>Log Out</button>
//                 </div>
//             )
//         }
//         return (
//             <div>
//                 <div>
//                     <h1>You are currently logged Out</h1>
//                     <button onClick={this.props.handleLogging}>Log In</button>
//                 </div>
//             </div>
//         )
//     }
//
//
// }
//
//
// // constructor() {
// //     super();
// //     this.state ={
// //         todos: todosData
// //     }
// //
// //     this.handleChange = this.handleChange.bind(this)
// //
// // }
// //
// // handleChange(id){
// //     this.setState(prevState =>{
// //         let prevtoDo = prevState.todos.map(item =>{
// //             if(item.id === id){
// //                 item.completed = !item.completed
// //             }
// //             return item
// //         })
// //         return {
// //             todos: prevtoDo
// //         }
// //     })
// //
// // }
// //
// // render(){
// //     const todos= this.state.todos.map(item => <ToDo key={item.id} item={item} handleChange={this.handleChange} />)
// //     return (
// //         <div className="todo-list">
// //             {todos}
// //         </div>
// //     )
// // }
//
// // counter(){
// //     this.setState(prevState => {
// //         return {
// //             count: prevState.count + 1
// //         }
// //     })
// // }
//
// // render(){
// //     return(
// //         <div>
// //             <img onMouseOver={() => console.log("Hovored!!")}
// //                  src="http://placekitten.com/300/400"/>
// //             <br/>
// //             <br/>
// //             <h1>{this.state.count}</h1>
// //             <button onClick={this.counter}>Count plus</button>
// //         </div>
// //     )
// // }
// //
//
//
// // render(){
// //
// //     let loggedInText
// //     if(this.state === true){
// //         loggedInText = "In"
// //     }else{
// //         loggedInText = "Out"
// //     }
// //     return (
// //         <Logging isLoggedIn={this.state.isLoggedIn}></Logging>
// //     )
// // }
//
// // function App(){
// //
// //     const jokesComponents = jokesData.map(joke =>
// //             <Jokes
// //                 key={joke.id}
// //                 question ={joke.question}
// //                 punchLine ={joke.punchLine}
// //             />
// //     )
// //
// //     const products = productsData.map(item => <Product
// //         key={item.name}
// //         product={item}/>)
// //
// //     return (
// //         <div>
// //             {products}
// //         </div>
// //     )
// // }