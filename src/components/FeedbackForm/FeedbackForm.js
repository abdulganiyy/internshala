import React from "react";
import "./FeedbackForm.css";

import countries from "../../countries";

const FeedbackForm = ({ changeActiveTab }) => {
  const [countriess] = React.useState([...countries]);
  const [suggestions, setSuggestions] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearch = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = countriess.sort().filter((v) => regex.test(v));
    }

    setSuggestions(suggestions);
    setSearchValue(value);
  };

  const onSelectItem = (item) => {
    setSearchValue(item);
    setSuggestions([]);
  };

  const onsubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feedback_form">
      <p onClick={() => changeActiveTab("home")} className="goback">
        Go Back
      </p>
      <h3> Thank you for taking the time</h3>
      <p>Please provide the details</p>
      <form className="form" onSubmit={(e) => onsubmit(e)}>
        <div className="form_group">
          <label htmlFor="firstname" className="form_label">
            First Name:
          </label>
          <input
            id="firstname"
            placeholder="John"
            type="text"
            className="form_input"
          />
        </div>
        <div className="form_group">
          <label htmlFor="" className="form_label">
            Last Name:
          </label>
          <input type="text" placeholder="Doe" className="form_input" />
        </div>
        <div className="form_group">
          <label htmlFor="" className="form_label">
            Address:
          </label>
          <textarea
            type="text"
            placeholder="Enter your full postal address"
            className="form_textarea"
          ></textarea>
        </div>
        <div className="form_group">
          <span className="search">
            <ion-icon name="search-outline"></ion-icon>
          </span>
          <label htmlFor="country" className="form_label">
            Country:
          </label>
          <input
            type="text"
            id="country"
            placeholder="India"
            className="form_input"
            value={searchValue}
            onChange={onChangeSearch}
          />
          {suggestions.length > 0 ? (
            <ul className="suggestions">
              {suggestions.map((item) => (
                <li onClick={() => onSelectItem(item)}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="form_group">
          <label htmlFor="email" className="form_label">
            Email ID:
          </label>
          <input
            type="email"
            placeholder="example@sample.com"
            id="email"
            className="form_input"
          />
        </div>
        <div className="form_group">
          <div>Phone Number:</div>
          <div className="form_phone_group">
            <div className="form_phone_group_left">
              <label htmlFor="countrycode" className="form_label"></label>
              <input
                type="text"
                placeholder="+91"
                id="countrycode"
                className="form_input"
              />
            </div>
            <div className="form_phone_group_right">
              <label htmlFor="number" className="form_label"></label>
              <input
                type="text"
                placeholder="123456789"
                id="number"
                className="form_input"
              />
            </div>
          </div>
        </div>
        <div className="form_group">
          <button
            className="form_btn"
            type="submit"
            onClick={(e) => onsubmit(e)}
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
