import "./App.css";
import Card from "./Card";
import CreateCard from "./CreateCard";
import ViewCard from "./ViewCard";
function App() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          fontFamilsy: "sans-serif",
          padding: "1em",
          textDecoration: "underline",
        }}
      >
        Create Card
      </h2>
      <CreateCard></CreateCard>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "sans-serif",
          padding: "1em",
          textDecoration: "underline",
        }}
      >
        View my cards
      </h2>
      <ViewCard></ViewCard>
    </>
  );
}

export default App;
