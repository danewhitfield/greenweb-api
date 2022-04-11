import React, { useState } from "react";
import { fetchFunc } from "../utils/fetchFunc";

export default function InputData({ setResultData }) {
  const [formData, setFormData] = useState("");

  return (
    <div>
      <h1>Input Data</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <button
          onClick={() => {
            fetchFunc(formData).then((data) => {
              console.log("data:", data);
              setResultData(data);
            });
          }}
        >
          CLICK ME
        </button>
      </form>
    </div>
  );
}
