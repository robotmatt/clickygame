import React from "react";
import Card from "react-bootstrap/Card";
import "./image.css";

function View(props, state) {
  return (
    <Card>
      <img
        alt={props.name}
        src={props.image}
        id={props.id}
        onClick={() => props.shuffleImages(props.id)}
        className="shuffleScore"
      />

    </Card>
  );
}

export default View;
