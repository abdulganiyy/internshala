import React from "react";

import "./App.css";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import Sidebar from "./components/Sidebar/Sidebar";
import Pagination from "./components/Pagination/Pagination";
import SinglePostModal from "./components/SinglePostModal/SinglePostModal";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";

function App() {
  const [gridMode, setGridMode] = React.useState(false);
  const [postsPerPage] = React.useState(5);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [showSinglePostModal, setShowSinglePostModal] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("home");

  const changeActiveTab = (name) => {
    setActiveTab(name);
  };

  const changePageNumber = (currentNumber) => {
    if (!currentNumber) return setPageNumber(pageNumber + 1);
    setPageNumber(currentNumber);
  };

  const changeGridMode = () => {
    setGridMode(!gridMode);
  };

  const closeModal = () => {
    setShowSinglePostModal(!showSinglePostModal);
  };

  return (
    <div className="container">
      <SinglePostModal
        showSinglePostModal={showSinglePostModal}
        closeModal={closeModal}
      />
      <div className="left">
        <Sidebar
          gridMode={gridMode}
          changeGridMode={changeGridMode}
          changeActiveTab={changeActiveTab}
          activeTab={activeTab}
        />
      </div>
      <div className="right">
        {activeTab === "home" ? (
          <>
            <ArticlesList
              gridMode={gridMode}
              postsPerPage={postsPerPage}
              pageNumber={pageNumber}
              showSinglePostModal={showSinglePostModal}
              closeModal={closeModal}
            />
            <Pagination
              changePageNumber={changePageNumber}
              pageNumber={pageNumber}
            />
          </>
        ) : (
          <FeedbackForm changeActiveTab={changeActiveTab} />
        )}
      </div>
    </div>
  );
}

export default App;
