import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Navbar from "./components/CommonComponent/Navbar/Navbar";
import Footer from "./components/CommonComponent/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
