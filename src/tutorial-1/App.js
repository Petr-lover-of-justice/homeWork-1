import React from "react"
import './App.css';


function App() {

  return (
    <div className="App">
      <Profile />
    </div>
  );
}

let email;
let password;
const cheked = (event) => {
  if (event.target.name === "email") {
    email = event.target.value
  }
  else {
    password = event.target.value
  }

}
function Profile(props) {
  function handleSubmit(event) {
    event.preventDefault()
    if (email === undefined || password === undefined) {
      alert("заполни поля")
    }
    else {
      console.log(email, password);
      email = event.target.reset()
      password = event.target.reset()
    }
  }
  return (
    <div className="hello">
      <form onSubmit={handleSubmit}>
        <input placeholder="E-Mail" type={"text"} name="email" onChange={cheked} />
        <input placeholder="password" type={"password"} name="password" onChange={cheked} />
        <button type="submit" >Отправить</button>
      </form>
    </div>
  )
}



export default App;
