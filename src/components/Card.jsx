const Card = ({character,clicked,setClicked, score, setScore }) => {
    const addId = () => {
        let index = clicked.indexOf(clicked.find((item) => item.id == character._id))
        let newClicked = [...clicked]
        console.log('This is new Clicked', newClicked)
        if (newClicked[index].selected === false) {
            newClicked[index].selected = true
            setScore(score + 1)
        }

        else {
            setScore(0)
            for (let i = 0; i < newClicked.length; i++) {
                newClicked[i].selected = false
            }
        }
        // newClicked[index].clicked = true
        setClicked(newClicked)
    }
    return (
        <div className="card" key={
            character._id}>
        <h1>{character.name}</h1>
        <img onClick={() => addId()} src={character.imageUrl} alt={character.name} id={character._id}/>
        </div>
    )
}

export default Card;