import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componnent/Shared/Header/Header";
import Home from "./View/Home/Home";
import SearchItem from "./View/SearchItem/SearchItem";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search/:item" element={<SearchItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
