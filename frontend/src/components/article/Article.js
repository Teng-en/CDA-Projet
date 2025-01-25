import ArticleClasses from './Article.module.css'

function Article(props) {

    return (
        <div className={ArticleClasses.article}>
            <div className={ArticleClasses.head}>
                <h1>{props.title}</h1>
                <img src={props.image} alt={"article img"}/>
            </div>
            <div className={ArticleClasses.articleTags}>
                <p>{props.tags}</p>
            </div>
            <div className={ArticleClasses.articleContent}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Article