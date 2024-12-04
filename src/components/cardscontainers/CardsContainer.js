import CardsContainersClasses from './CardsContainer.module.css'
import Card from './Card'

function CardsContainer(props) {

    return (
        <div className={CardsContainersClasses.cardsContainer}>
            {
                props.cards.map(function (card) {
                    return <Card image={card.image} name={card.name} description={card.description}/>
                })
            }
        </div>
    )
}

export default CardsContainer