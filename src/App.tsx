import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>{/* <Route path="/" /> */}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
