import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Componnent/Shared/Header/Header";
import Failure from "./View/Failure/Failure";
import Home from "./View/Home/Home";
import SearchItem from "./View/SearchItem/SearchItem";
import Success from "./View/Success/Success";
import Upcoming from "./View/Upcoming/Upcoming";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search/:item" element={<SearchItem />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/success" element={<Success />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
