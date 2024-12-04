import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLayout from './AppLayout';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {News} from "./news/News";
import ArticlePage from "./articlePage/ArticlePage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<AppLayout />}>
                  <Route index element={<Navigate to={"news"}/>} />
                  <Route path="news" element={<News />}/>
                  <Route path="ArticlePage/:id" element={<ArticlePage />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
