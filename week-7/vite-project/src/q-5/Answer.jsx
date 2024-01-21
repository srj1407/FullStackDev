import React from "react";

function Answer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "15em",
          height: "20em",
          border: "none",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "20%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <img></img>
          <div>
            <p>Shashwat Raj</p>
            <span>Followers:</span>
            <span>Following:</span>
          </div>
        </div>
        <div
          style={{
            height: "80%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Answer;
