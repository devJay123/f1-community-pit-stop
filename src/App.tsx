import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BoardApp from './board/BoardApp';
import BoardList from './board/BoardList';
import BoardForm from './board/BoardForm';
import BoardEdit from './board/BoardEdit';
// import BoardReply from './board/BoardReply';
import BoardView from './board/BoardView';
import Home from './pages/Home';
import Rank from './pages/Rank';
import LoginHome from './member/LoginHome';
import SignUp from './member/SignUp';
import Footer from './Footer';
import PageNotFound from './pages/PageNotFound';

import './common.css';
import './App.css';
import ScheduleList from './F1schedule/ScheduleList';
import Chat from './chat/Chat';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<BoardApp />} />

            <Route path="/community/list/:teamnum" element={<BoardList />} />

            {/* 채팅 */}
            <Route path="/chat" element={<Chat />} />
            <Route path="/rank" element={<Rank />} />

            <Route path="/boardwrite/:teamnum" element={<BoardForm />} />
            <Route path="/boardEdit/:id" element={<BoardEdit />} />

            {/* <Route path="/tempreply" element={<BoardReply />} /> */}
            <Route path="/boards/:teamnum/:id" element={<BoardView />} />

            {/* login */}
            <Route path="/loginHome" element={<LoginHome />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/schedule" element={<ScheduleList />} />
            {/* PageNotFound */}
            <Route path={'*'} element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
