import Rodal from "rodal";
import "rodal/lib/rodal.css";

import React from "react";

const Modal = ({ show, hideModal, title, data }) => {
  return (
    <Rodal visible={show} onClose={hideModal}>
      <h3 className="modal-title">{title}</h3>
      <div className="modal-container">
        <div className="modal-content">
          <p className="modal-data">{data}</p>
        </div>
      </div>
    </Rodal>
  );
};

export default Modal;
