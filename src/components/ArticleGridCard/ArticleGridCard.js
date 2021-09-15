import React from "react";

import "./ArticleGridCard.css";

const ArticleGridCard = ({ article, closeModal }) => {
  return (
    <div>
      <div className={"article_grid"} onClick={() => closeModal()}>
        <div className={"item_grid"}>
          <div className="item_text">
            <h1 className="primary_heading">{article.title}</h1>
            <p>{article.body}</p>
            <p className="timestamp">Mon, 25 Dec 2020, 14:57 GMT</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="User img"
            className={"item_grid_img"}
          />
        </div>
        <div className={"gridcancel"}>
          <span>
            <ion-icon name="close-outline"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleGridCard;
