import "./App.css";
import "./common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
