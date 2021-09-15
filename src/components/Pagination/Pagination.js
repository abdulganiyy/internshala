import React from "react";

import "./Pagination.css";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchArticles } from "../../slices/articlesSlice";

const Pagination = ({ changePageNumber, pageNumber }) => {
  //   const [pageCount, setPageCount] = React.useState();

  //   React.useEffect(() => {
  //     setPageCount(Math.ceil(articles.length / postsPerPage));
  //   });
  return (
    <div className="pagination-dots">
      <div
        onClick={() => changePageNumber(1)}
        className={pageNumber === 1 ? "dot active" : "dot"}
      >
        1
      </div>
      <div
        onClick={() => changePageNumber(2)}
        className={pageNumber === 2 ? "dot active" : "dot"}
      >
        2
      </div>
      <div
        onClick={() => changePageNumber(3)}
        className={pageNumber === 3 ? "dot active" : "dot"}
      >
        3
      </div>
      <div onClick={() => changePageNumber()} className="next">
        <ion-icon name="chevron-forward-outline"></ion-icon>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Pagination;
