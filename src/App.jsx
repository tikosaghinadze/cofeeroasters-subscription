import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <main className="flex flex-col items-center p-8 w-96 min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
