import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Search from "./routes/Home/Search";
import NotFound from "./routes/Home/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="search/:users" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
