import ArticleClasses from './CreateArticle.module.css'

function CreateArticle() {

    return (
        <div className={ArticleClasses.article}>
            <div className={ArticleClasses.head}>
                <h1>Add title</h1>
                <imgCUerzfffffff alt={"article img"}/>
            </div>
            <div className={ArticleClasses.articleTags}>
                <p></p> {/*mettre le select2 like ici*/}
            </div>
            <div className={ArticleClasses.articleContent}>
                <p>blahblah</p>
            </div>
        </div>
    )
}

export default CreateArticle




// import React, { useState } from 'react';
// import Select from 'react-select';
//
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];
//
// export default function App() {
//     const [selectedOption, setSelectedOption] = useState(null);
//
//     return (
//         <div className="App">
//             <Select
//                 defaultValue={selectedOption}
//                 onChange={setSelectedOption}
//                 options={options}
//             />
//         </div>
//     );
// }