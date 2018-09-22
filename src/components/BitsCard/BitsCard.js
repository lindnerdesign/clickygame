import React from "react";
import "./BitsCard.css";

const BitsCard = props => (
  <div 
      className="card" 
      onClick={() => props.clickCount(props.id)}>

    <div className="img-container">
      <img alt={props.name} 
           src={props.image} />
    </div>
    
    <div className="content"></div>
  </div>
);

export default BitsCard;
