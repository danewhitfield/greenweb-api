import React, { useState } from "react";

export default function Results({ resultData }) {
  return (
    <div>
      <h3>Results</h3>
      <p>{resultData.postcode}</p>
      <p>{resultData.dnoregion}</p>
      <p>{resultData.data[0].from}</p>
      <p>{resultData.data[0].intensity.forecast}</p>
      <p>{resultData.data[0].intensity.index}</p>
    </div>
  );
}
