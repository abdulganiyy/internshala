import React from "react";

import "./SinglePostModal.css";

const SinglePostModal = ({ showSinglePostModal, closeModal }) => {
  return (
    <div
      onClick={() => closeModal()}
      className={showSinglePostModal ? "modal show" : "modal"}
    >
      <img
        src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Post Img"
        className="modal_img"
      />
    </div>
  );
};

export default SinglePostModal;
