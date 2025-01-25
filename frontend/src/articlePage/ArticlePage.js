import Article from "../components/article/Article";
import {useParams} from "react-router-dom";

const articles = [
    {
        id : "1",
        image :"https://i.pravatar.cc/300?img=22",
        title :"Coucou",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti curabitur per parturient dapibus cubilia\n" +
            "                    sociosqu orci. Pulvinar montes ut velit, risus mauris finibus. Eros vestibulum fermentum luctus\n" +
            "                    phasellus odio pulvinar. Integer nam felis nisi; habitasse dignissim facilisi. Elit eleifend\n" +
            "                    parturient fermentum ultrices duis sollicitudin taciti fringilla. Vel erat morbi urna sollicitudin\n" +
            "                    vestibulum.\n" +
            "\n" +
            "                    Eleifend posuere suspendisse ex amet per dis at fermentum. Ullamcorper ridiculus tempor nullam cras\n" +
            "                    enim fermentum ad urna. Id congue sociosqu ultrices mi at at natoque integer rutrum. Inceptos tempus\n" +
            "                    mauris sed in hac habitant. Leo donec velit; ultrices malesuada maecenas conubia. Turpis dui purus\n" +
            "                    hac quis venenatis justo. Erat eu aliquet dis cubilia a semper ornare. Accumsan montes vel velit ex\n" +
            "                    mus diam. Dictum malesuada inceptos morbi per; proin himenaeos porta magnis.\n" +
            "\n" +
            "                    Urna sed platea tincidunt orci iaculis auctor lobortis. Massa erat purus lacus duis maximus vitae\n" +
            "                    metus. Malesuada nisl augue dui mollis pulvinar. Elit morbi non gravida a imperdiet blandit. Ante\n" +
            "                    quisque integer potenti lacinia est efficitur ultrices. Amassa amet nullam amet est lacus. Purus\n" +
            "                    aliquet aliquet hendrerit; sociosqu mattis lorem commodo in. Ante sagittis arcu ac fusce; tempus ex\n" +
            "                    lacinia.",
        tags : [
            "coucou ", "meduses "
        ]
    }
]

function ArticlePage() {
    const params = useParams();
    const article = articles.find(article => {
        return article.id === params.id
    })
    return (
        article ? <Article {...article}/> : <div>404</div>
    );
}



export default ArticlePage;