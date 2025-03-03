const Card = (prop) => {

    const addId = () => {
        prop.setCount(prop.count+1)
        let index = prop.clicked.indexOf(prop.clicked.find((item) => item.id == prop.id))
        let newClicked = [...prop.clicked]
        if (newClicked[index].selected === false) {
            newClicked[index].selected = true
            prop.setScore(prop.score + 1)
        }
        else {
            prop.setScore(0)
            for (let i = 0; i < newClicked.length; i++) {
                newClicked[i].selected = false
            }
        }
        // newClicked[index].clicked = true
        prop.setClicked(newClicked)
    }

    return (
        <div className="card">
            <h2>{prop.title}</h2>
            <p>{prop.description}</p>
            <button id={prop.id} 
            onClick={() => addId()}>Click Me!</button>
        </div>
    )
}

export default Card;

