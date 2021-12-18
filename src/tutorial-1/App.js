import React from "react"
import './App.css';
import ProfileClass from "./profile";

function App() {

  return (
    <div className="App">
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />

    </div>
  );
}

function Profile(props) {

  const names = ["Вася"]  // сдесь должн быть длинный список имен чтоб фильтровать пропс и показывать только имена, но пока одного хватит

  const nameCurrent = props.name.split(" ")
  const returns = nameCurrent.filter(nameCurrentFiltr => !!names.includes(nameCurrentFiltr));// сама фильтрация

  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className="hello">
      <div className="helloName">Привет, <b>{returns}</b></div>
      <div className="helloDataRegistrein">Дата регистрации: {props.registredAt.toLocaleDateString('ru', options)}</div>
    </div>
  )
}

export default App;
