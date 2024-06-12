import logo from "./logo.svg";
import "./App.css";
import Greating from "./components/Greeting";
import CurrentTime from "./components/CurrentTime";
import EventCard from "./components/EventCard";


function App() {
  return (
    <div className="App">
      <CurrentTime />
      <Greating />
      <EventCard
        number="1"
        nameEvent="концерт"
        timeEvent="21.07.24"
        placeEvent="Москва"
      />
      <EventCard
        number="2"
        nameEvent="фестиваль"
        timeEvent="23.08.24"
        placeEvent="Балашиха"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
