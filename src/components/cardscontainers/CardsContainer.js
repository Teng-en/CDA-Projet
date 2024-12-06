import CardsContainersClasses from './CardsContainer.module.css'
import Card from './Card'
import {useNavigate} from "react-router-dom";

function CardsContainer(props) {
    const navigate = useNavigate()
    function nav (id){
        navigate(id)
    }

    return (
        <div className={CardsContainersClasses.cardsContainer}>
            {
                props.cards.map((card, index) => {
                    return <Card key={index} image={card.image} name={card.name} description={card.description}
                                 onclick={() => nav(card.articleid)}/>
                })
            }
        </div>
    )
}

export default CardsContainer