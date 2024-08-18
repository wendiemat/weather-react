import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather App</h1>
        <h3>What is the weather like in your city?</h3>
        <em>
          {" "}
          Click the 'Search' button to see what the weather is like in your
          city.
        </em>

        <Weather />
      </header>
    </div>
  );
}

export default App;
