import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <main className="flex flex-col items-center p-8 w-96 min-h-screen">
        <Header />
        <Home />
        <Footer />
      </main>
    </>
  );
}

export default App;
