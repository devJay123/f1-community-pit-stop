import "./App.css";
import "./common.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import BoardApp from "./board/BoardApp";
import BoardList from "./board/BoardList";
import BoardForm from "./board/BoardForm";
import BoardEdit from "./board/BoardEdit";
// import BoardReply from './board/BoardReply';
import BoardView from "./board/BoardView";
import Home from "./pages/Home";
import Rank from "./pages/Rank";

// temp로 써져있는거 삭제하기
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<BoardApp />} />

          <Route path="/community/list/:teamnum" element={<BoardList />} />
          <Route path="/rank" element={<Rank />} />

          <Route path="/templist" element={<BoardList />} />
          <Route path="/boardwrite/:teamnum" element={<BoardForm />} />
          <Route path="/boardEdit/:id" element={<BoardEdit />} />

          {/* <Route path="/tempreply" element={<BoardReply />} /> */}
          <Route path="/boards/:teamnum/:id" element={<BoardView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
