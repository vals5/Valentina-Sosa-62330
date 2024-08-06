import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Nosotros from "./components/Nosotros.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
