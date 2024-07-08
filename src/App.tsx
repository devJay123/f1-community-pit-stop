import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BoardApp from './board/BoardApp';
import BoardList from './board/BoardList';
import BoardForm from './board/BoardForm';
import BoardEdit from './board/BoardEdit';
// import BoardReply from './board/BoardReply';
<<<<<<< HEAD
import BoardView from "./board/BoardView";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import LoginHome from "./member/LoginHome";
import SignUp from "./member/SignUp";
=======
import BoardView from './board/BoardView';
import Home from './pages/Home';
import Rank from './pages/Rank';
import LoginHome from './member/LoginHome';
import SignUp from './member/SignUp';
import Footer from './Footer';

import './common.css';
import './App.css';
>>>>>>> ea76e070fe738ad28bde350071d2f74f0c2db721

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

          {/* login */}
          <Route path="/loginHome" element={<LoginHome />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
