import ArticleClasses from './CreateArticle.module.css'
import {useState} from "react";
import React from 'react';
import CreatableSelect from 'react-select/creatable';



function CreateArticle() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    const [title, setTitleArticle] = useState("");
    const [photo, setPhoto] = useState(null);
    const [content, setContent] = useState("");
    const [contentLength, setContentLength] = useState(0)

    const inputArticleHandler = (e) => {
        const {name, value} = e.target;
        if (name === "articleTitle") {setTitleArticle(value)}
        else if (name === "articleContent") {
            setContent(value);
            setContentLength(value.length);
        }
    };

    const photoChangeHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    };

    return (
        <div className={ArticleClasses.article}>
            <div className={ArticleClasses.head}>
                <div className={ArticleClasses.title}>
                    <input
                        name={"articleTitle"}
                        type={"text"}
                        placeholder={"Titre de l'article"}
                        value={title}
                        onChange={inputArticleHandler}/>
                </div>
                <div className={ArticleClasses.img}>
                    <input
                        type={"file"}
                        accept={"image/*"}
                        onChange={photoChangeHandler}/>
                    {photo && (<div className={ArticleClasses.imagePreview}>
                        <img src={photo} alt="Prévisualisation"/>
                    </div>)}
                </div>
            </div>
            <div className={ArticleClasses.articleTags}>
                <CreatableSelect isMulti options={options} />
            </div>
            <div className={ArticleClasses.articleContent}>
                <input
                    name={"articleContent"}
                    type={"text"}
                    placeholder={"Contenu de l'article"}
                    value={content}
                    onChange={inputArticleHandler}
                />
                <div className={ArticleClasses.charCount}>{1000 - contentLength}/1000</div>
            </div>
        </div>
    )
}

export default CreateArticle