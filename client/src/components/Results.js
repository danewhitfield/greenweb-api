import React, { useState } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Modal from "./Modal";

export default function Results({ resultData }) {
  const [showPostcode, setShowPostcode] = useState(false);
  const [showRegion, setShowRegion] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const [showIndex, setShowIndex] = useState(false);

  return (
    <div className="results-container">
      <h3>Results</h3>
      <div className="results">
        <div className="show-modal">
          <button onClick={() => setShowPostcode(true)}>
            <p id="post-code" className="result-card">
              {resultData.postcode}
            </p>
          </button>
          <Modal
            show={showPostcode}
            hideModal={() => setShowPostcode(false)}
            title={"Postcode"}
            data={resultData.postcode}
          />
        </div>
        <div className="show-modal">
          <button onClick={() => setShowRegion(true)}>
            <p id="region" className="result-card ">
              {resultData.dnoregion}
            </p>
          </button>

          <Modal
            show={showRegion}
            hideModal={() => setShowRegion(false)}
            title={"Region"}
            data={resultData.dnoregion}
          />
        </div>
        <div>
          <button onClick={() => setShowDate(true)}>
            <p id="date" className="result-card ">
              {resultData.data[0].from}
            </p>
          </button>

          <Modal
            show={showDate}
            hideModal={() => setShowDate(false)}
            title={"Date"}
            data={resultData.data[0].from}
          />
        </div>
        <div>
          <button onClick={() => setShowForecast(true)}>
            <p id="i-forecast" className="result-card ">
              {resultData.data[0].intensity.forecast}
            </p>
          </button>

          <Modal
            show={showForecast}
            hideModal={() => setShowForecast(false)}
            title={"Forecast"}
            data={resultData.data[0].intensity.forecast}
          />
        </div>
        <div>
          <button onClick={() => setShowIndex(true)}>
            <p id="i-index" className="result-card ">
              {resultData.data[0].intensity.index}
            </p>
          </button>

          <Modal
            show={showIndex}
            hideModal={() => setShowIndex(false)}
            title={"Index"}
            data={resultData.data[0].intensity.index}
          />
        </div>
      </div>
    </div>
  );
}
