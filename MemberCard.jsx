import React from "react";

function MemberCard(props) {
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <h3>Role: {props.role}</h3>
      <img src={props.image} alt={props.name} />
    </div>
  );

}

export default MemberCard;
