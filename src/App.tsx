import './App.css';
import './common.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BoardApp from './board/BoardApp';
import BoardList from './board/BoardList';
import BoardForm from './board/BoardForm';
import BoardEdit from './board/BoardEdit';
import BoardReply from './board/BoardReply';

// temp로 써져있는거 삭제하기
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/community" element={<BoardApp />} />
          <Route path="/community/list/:id" element={<BoardList />} />
          <Route path="templist" element={<BoardList />} />
          <Route path="tempform" element={<BoardForm />} />
          <Route path="tempedit" element={<BoardEdit />} />
          <Route path="tempreply" element={<BoardReply />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
