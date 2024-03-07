import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/Home/About/About";
import Plan from "./pages/Home/Plan/Plan";

function App() {
  return (
    <>
      <main className="flex flex-col items-center p-8 w-96 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={About} />
          <Route path="/plan" element={Plan} />
          <Route />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
