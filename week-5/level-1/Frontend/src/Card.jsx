import React from "react";

function Card(props) {
  return (
    <div
      style={{
        padding: "2em",
      }}
    >
      <div
        style={{
          padding: "2em",
          width: "30em",
          border: "1px solid",
          borderRadius: "1em",
          borderColor: "silver",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <h3>Interests</h3>
        {props.interests.map((value) => (
          <p>{value}</p>
        ))}
        <a href={props.linkedin}>Linkedin</a>
        <a href={props.twitter}>Twitter</a>
      </div>
    </div>
  );
}

export default Card;
