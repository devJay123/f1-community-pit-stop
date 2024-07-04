import React from "react";
import BoardList from "./BoardList";
import BoardNavi from "./BoardNavi";
import { Link } from "react-router-dom";

export default function BoardApp() {
  return (
    <div>
      <BoardNavi />
      <h1>커뮤니티</h1>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li>
            <Link to={`/community/list/${i}`}>팀</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
