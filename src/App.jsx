import "./App.css";
import "./components/Header/Header.css";
import "./components/Home/Home.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <main className="main-container">
        <Header />
        <Home />
      </main>
    </>
  );
}

export default App;
