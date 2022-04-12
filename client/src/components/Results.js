import React, { useState } from "react";

export default function Results({ resultData }) {
  if (resultData)
    return (
      <div className="results-container">
        <h3>Results</h3>
        <div className="results">
          <p className="result-card">{resultData.postcode}</p>
          <p className="result-card">{resultData.dnoregion}</p>
          <p className="result-card">{resultData.data[0].from}</p>
          <p className="result-card">{resultData.data[0].intensity.forecast}</p>
          <p className="result-card">{resultData.data[0].intensity.index}</p>
        </div>
      </div>
    );
}
