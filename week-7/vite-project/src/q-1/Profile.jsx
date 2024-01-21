import React from "react";

function Profile() {
  return (
    <div
      style={{
        height: "20em",
        width: "18em",
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
      }}
    >
      <div
        style={{
          height: "80%",
          borderBottom: "1px solid gray",
        }}
      >
        hello
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "20%",
        }}
      >
        <Badge title={"Followers"} count={"80K"}></Badge>
        <Badge title={"Likes"} count={"80K"}></Badge>
        <Badge title={"Photos"} count={"80K"}></Badge>
      </div>
    </div>
  );
}

function Badge({ title, count }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <p>{count}</p>
      <p
        style={{
          color: "gray",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default Profile;
