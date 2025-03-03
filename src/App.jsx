import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([{id: 1, selected: false}, {id: 2, selected: false}, {id: 3, selected: false}, {id: 4, selected: false}])

  console.log(clicked)
  console.log("the score is ",score)
  console.log("the best score is ", bestScore)

useEffect(() => {
  if (score > bestScore) {
    setBestScore(score);
  }
}, [score])

  return (
    <>
      <div className="card-container">
        <Card title="Vite" description="Next generation frontend tooling" count={count} setCount={setCount} setClicked={setClicked} clicked={clicked} id="1" score={score} setScore={setScore} />
        <Card title="React" description="A JavaScript library for building user interfaces"count={count} setCount={setCount} setClicked={setClicked} clicked={clicked} id="2" score={score} setScore={setScore} />
        <Card title="Vite + React" description="Blazing fast frontend development"count={count} setCount={setCount} setClicked={setClicked} clicked={clicked} id="3" score={score} setScore={setScore}/>
        <Card title="Someting Else" description="Title and something"count={count} setCount={setCount} setClicked={setClicked} clicked={clicked} id="4" score={score} setScore={setScore}/>
      </div>
    </>
  )
}

export default App
