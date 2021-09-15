import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../slices/articlesSlice";

import ArticleCard from "../ArticleCard/ArticleCard";
import ArticleGridCard from "../ArticleGridCard/ArticleGridCard";

import "./ArticlesList.css";

const ArticlesList = ({ gridMode, postsPerPage, pageNumber }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  let { articles } = useSelector((state) => state.articlesReducer);
  console.log(articles);

  React.useEffect(() => {
    setStartIndex(pageNumber * postsPerPage - postsPerPage);
    setEndIndex(startIndex + postsPerPage);
  }, [articles, pageNumber, postsPerPage, startIndex]);

  return (
    <div className={gridMode ? "grid" : "list"}>
      {articles &&
        (gridMode
          ? articles
              .slice(startIndex, endIndex)
              .map((article) => (
                <ArticleGridCard key={article.id} article={article} />
              ))
          : articles
              .slice(startIndex, endIndex)
              .map((article) => (
                <ArticleCard key={article.id} article={article} />
              )))}
    </div>
  );
};

export default ArticlesList;
