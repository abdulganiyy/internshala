import React from "react";

import "./ArticleCard.css";

const ArticleCard = ({ article, closeModal }) => {
  return (
    <div className={"article"} onClick={() => closeModal()}>
      <div className={"item"}>
        <img
          src="https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="User img"
          className={"item_img"}
        />
        <div className="item_text">
          <h1 className="primary_heading">{article.title}</h1>
          <p>{article.body}</p>
          <p className="timestamp">Mon, 25 Dec 2020, 14:57 GMT</p>
        </div>
      </div>
      <div className={"cancel"}>
        <span>
          <ion-icon name="close-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
