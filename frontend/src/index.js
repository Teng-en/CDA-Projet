import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "./news/News";
import ArticlePage from "./articlePage/ArticlePage";
import Connexion from "./connexion/Connexion";
import MyAccount from "./myAccount/MyAccount";
import CreateArticle from "./createArticle/CreateArticle";
import {AuthProvider} from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Navigate to={"news"}/>}/>
                    <Route path="news">
                        <Route index element={<News/>}/>
                        <Route path=":id" element={<ArticlePage/>}/>
                    </Route>
                    <Route path="connexion" element={<Connexion/>}/>
                    <Route path="me" element={<MyAccount/>}/>
                    <Route path="createarticle" element={<CreateArticle/>}/>
                </Route>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
