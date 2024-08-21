import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Error />} path="*"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
