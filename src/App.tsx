import "./App.css";
import "./common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import BoardApp from "./board/BoardApp";
import BoardList from "./board/BoardList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/community" element={<BoardApp />} />
          <Route path="/community/list/:id" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
