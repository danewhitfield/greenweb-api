import React, { useState } from "react";
import { fetchFunc } from "../utils/fetchFunc";
import { FaSearch } from "react-icons/fa";

export default function InputData({ setResultData }) {
  const [formData, setFormData] = useState("");

  return (
    <div>
      {/* <h1>Enter your postcode</h1> */}
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <input
            placeholder="M26, BD2 etc."
            type="text"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
          />
          <button
            className="submit-btn"
            onClick={() => {
              fetchFunc(formData).then((data) => {
                console.log("data:", data);
                setResultData(data);
              });
            }}
          >
            <span className="search-icon">
              <FaSearch />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
