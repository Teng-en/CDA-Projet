import CardsClasses from './Card.module.css'

function Card(props) {
    const handleClick = () => {
        console.log(props)
        if (props.onclick) props.onclick()
    }
    return (
        <div onClick={handleClick}  className={CardsClasses.card}>
            <img src={props.image} alt="Portrait" className={CardsClasses["card-image"]}/>
            <div className={CardsClasses["card-content"]}>
                <h3 className={CardsClasses["card-title"]}>{props.name}</h3>
                <p className={CardsClasses["card-description"]}>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Card