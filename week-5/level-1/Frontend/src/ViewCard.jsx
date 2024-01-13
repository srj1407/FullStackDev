import React, { useState } from "react";
import Card from "./Card";

function ViewCard() {
  const [username, setUsername] = useState("");
  const [cards, setCards] = useState([]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2em",
            width: "30em",
            border: "1px solid",
            borderRadius: "1em",
            borderColor: "silver",
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h3>Enter Username:</h3>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const apiUrl = `http://localhost:3000/cards?username=${username}`;
              fetch(apiUrl).then(async function (res) {
                const json = await res.json();
                setCards(json.cards);
                console.log(cards);
              });
            }}
          >
            View Cards
          </button>
        </div>
      </div>
      {cards.length > 0 && (
        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            padding: "1em",
            textDecoration: "underline",
          }}
        >
          My Cards
        </h2>
      )}
      {cards.map((card) => {
        return (
          <Card
            title={card.title}
            description={card.description}
            twitter={card.twitter}
            linkedin={card.linkedin}
            interests={card.interests}
          ></Card>
        );
      })}
    </div>
  );
}

export default ViewCard;
