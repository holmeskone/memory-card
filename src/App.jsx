import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import DisplayCharacter from './components/displayCards'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [characters, setCharacters] = useState([])
  let n = 30;
useEffect(() => {
  
  // console.log("Mounted")
  const newArray = [...characters];
  const newClicked = [...clicked]
  fetch('https://api.disneyapi.dev/character')
  .then(response => response.json())
  .then(information => {information.data.slice(20,n).map((item) => {
    newArray.push(item)
    setCharacters(newArray)
    newClicked.push({id: item._id, selected: false})
    setClicked(newClicked)
  })})
  .catch(error => console.log(error))
}, []
)

if(score === (n-20)) {
  console.log("You win!")
  setScore(0)
  for (let i = 0; i < clicked.length; i++) {
    clicked[i].selected = false
}}

if (score > bestScore) {
  setBestScore(score);
}
  return (
    <>
      <div>
        <h1>Clicky Game</h1>
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
      <div className="card-container">
        <DisplayCharacter characters={characters} clicked={clicked} setClicked={setClicked} score={score} setScore={setScore}/>
      </div>
    </>
  )
}

export default App
