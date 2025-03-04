import Card from "./Card";

const DisplayCharacter = ({ characters, clicked, setClicked, score, setScore }) => {
    console.log(characters)
    const shuffle = (array) => {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      }
    shuffle(characters);
  return (
    characters.map((character) => {
      return (
        <Card key={character._id} character={character} clicked={clicked} setClicked={setClicked} score={score} setScore={setScore}/>
      )
    }
    ))};

export default DisplayCharacter;