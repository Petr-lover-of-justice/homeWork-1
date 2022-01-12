import React from "react";
import './App.css';
import Form from "./components/form";
import List from "./components/list";



// Imported Components below

function App() {
  const [comments, setComments] = React.useState([]);

  const onSave = (name, email, text) => {
    const newData = {
      fullName: name,
      email: email,
      createdAt: inputChangedAt,
      text: text,
      id: Math.random()
    }
    setComments([...comments, newData])
  }

  const onRemove = (id) => {
    const newArr = comments.filter((i) => i.id !== id);
    localStorage.setItem('comments', JSON.stringify(newArr))
    setComments(newArr)
  }

  const inputChangedAt = new Date().toLocaleTimeString("ru-RU", { year: "numeric", day: "numeric", month: "numeric" })
  React.useEffect(() => {
    if (localStorage.getItem('comments')) {
      setComments(JSON.parse(localStorage.getItem('comments')))
    }
  }, [])

  React.useEffect(() => {
    if (comments.length) {
      localStorage.setItem('comments', JSON.stringify(comments))
    }
  }, [comments])

  return (
    <div>
      <List comments={comments} onRemove={onRemove} />
      <Form onSave={onSave} />
    </div>
  )
}

export default App;