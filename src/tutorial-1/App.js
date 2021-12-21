import React from "react"
import './App.css';


function App() {
  let email;
  let password;
  const cheked = (event) => {
    if (event.target.name === "email") {
      email = event.target.value.trim()
    }
    else {
      password = event.target.value.trim()
    }

  }
  function handleSubmit(event) {

    event.preventDefault()

    if (!email || !password) {
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
