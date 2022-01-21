import React from "react";

function Information({ title, paragrpah, image }) {
  return (
    <div className="information-container">
      <div className="information">
        <h2 className="information-title">{title}</h2>
        <p className="information-paragraph">{paragrpah}</p>
      </div>
      <img className="information-image" src={image}></img>
    </div>
  );
}

export default Information;
