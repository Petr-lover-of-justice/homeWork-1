import React from "react"

import './App.css';
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";

function App() {
  const adjectivesArr = ["абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
  ];
  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
  ];


  const [active, setActive] = React.useState([])

  function TabClick() {
    let word1 = Math.floor(Math.random() * adjectivesArr.length);
    let word2 = Math.floor(Math.random() * adjectivesArr.length);
    let word3 = Math.floor(Math.random() * nounsArr.length);

    setActive((prev) =>
      [...prev, `${adjectivesArr[word1]} ${adjectivesArr[word2]} ${adjectivesArr[word3]}`,
      ]);
  }


  const clear = () => {
    setActive([])
  }


  return (
    <div className="wrapper">
      <div >
        {active && active.map((text, index) => <Phrase key={index} text={text}> /</Phrase>)}
      </div>
      {!active.length && <EmptyBlock />}
      <button
        onClick={TabClick}
        className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clear} className="btn btn_clear">Очистить</button>

    </div >

  )
}

export default App;
