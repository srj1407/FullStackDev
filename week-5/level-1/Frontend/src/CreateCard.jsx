import React, { useState } from "react";

function CreateCard() {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");
  return (
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
        Username:{" "}
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        Title:{" "}
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        Description:{" "}
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        Twitter:{" "}
        <input
          onChange={(e) => {
            setTwitter(e.target.value);
          }}
        ></input>
        Linkedin:{" "}
        <input
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        ></input>
        Interest1:{" "}
        <input
          onChange={(e) => {
            setInterest1(e.target.value);
          }}
        ></input>
        Interest2:{" "}
        <input
          onChange={(e) => {
            setInterest2(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const requestBody = JSON.stringify({
              username: username,
              title: title,
              description: description,
              twitter: twitter,
              linkedin: linkedin,
              interests: [interest1, interest2],
            });
            fetch("http://localhost:3000/createCard", {
              method: "POST",
              body: requestBody,
              headers: {
                "Content-Type": "application/json",
                "Content-Length": requestBody.length.toString(),
              },
            }).then(async function (res) {
              await res.json();
              alert("Card created");
            });
          }}
        >
          Create Card
        </button>
      </div>
    </div>
  );
}

export default CreateCard;
