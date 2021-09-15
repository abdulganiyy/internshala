import React from "react";

import "./App.css";
// import Articles from "./components/Articles/Articles.js";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Sidebar from "./components/Sidebar/Sidebar";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [gridMode, setGridMode] = React.useState(true);
  const [postsPerPage] = React.useState(5);
  const [pageNumber, setPageNumber] = React.useState(1);

  const changePageNumber = (currentNumber) => {
    if (!currentNumber) return setPageNumber(pageNumber + 1);
    setPageNumber(currentNumber);
  };

  const changeGridMode = () => {
    setGridMode(!gridMode);
  };

  return (
    <div className="container">
      <div className="left">
        <Sidebar gridMode={gridMode} changeGridMode={changeGridMode} />
      </div>
      <div className="right">
        <ArticlesList
          gridMode={gridMode}
          postsPerPage={postsPerPage}
          pageNumber={pageNumber}
        />
        <Pagination
          changePageNumber={changePageNumber}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

export default App;
