import CardsContainer from "../components/cardscontainers/CardsContainer";

const cards = [
    {
        articleid: 1,
        image: "https://i.pravatar.cc/300?img=11",
        name: "Poisson 1",
        description: "Développeur Front-end passionné par les interfaces élégantes et réactives",
    },
    {
        articleid: 2,
        image: "https://i.pravatar.cc/300?img=10",
        name: "Poisson 2",
        description: "Designer créatif avec un œil pour le détail et l'harmonie des couleurs.",
    },
    {
        articleid: 3,
        image: "https://i.pravatar.cc/300?img=32",
        name: "Raie Manta",
        description: " Chef de projet avec une expertise en gestion agile et communication efficace.",
    },
    {
        articleid: 4,
        image: "https://i.pravatar.cc/300?img=7",
        name: "Méduse",
        description: "Développeur Full-stack aimant résoudre des problèmes complexes avec du code propre.",
    },
]

export function News() {
    return (
        <CardsContainer cards={cards}/>
    )
}