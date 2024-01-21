import React, { useState } from "react";

function Answer() {
  const [color, setColor] = useState("Pink");
  const handleClickFunc = (newColor) => {
    setColor(newColor);
  };
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
          width: "90%",
          height: "90%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "80%",
            backgroundColor: color,
          }}
        ></div>
        <div
          style={{
            height: "20%",
            backgroundColor: "gray",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              customStyle={{
                backgroundColor: "Red",
              }}
              handleClick={handleClickFunc}
            >
              Red
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Yellow",
              }}
              handleClick={handleClickFunc}
            >
              Yellow
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Black",
              }}
              handleClick={handleClickFunc}
            >
              Black
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Purple",
              }}
              handleClick={handleClickFunc}
            >
              Purple
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Green",
              }}
              handleClick={handleClickFunc}
            >
              Green
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Blue",
              }}
              handleClick={handleClickFunc}
            >
              Blue
            </Button>
            <Button
              customStyle={{
                backgroundColor: "Pink",
              }}
              handleClick={handleClickFunc}
            >
              Default
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ children, customStyle, handleClick }) {
  const handleChildClick = () => {
    if (children === "Default") {
      handleClick("Pink");
    } else {
      handleClick(children);
    }
  };
  return (
    <button
      style={{
        ...customStyle,
        padding: "0.5em",
        border: "none",
        borderRadius: "1em",
        color: children === "Black" ? "white" : "black",
      }}
      onClick={handleChildClick}
    >
      {children}
    </button>
  );
}

export default Answer;
