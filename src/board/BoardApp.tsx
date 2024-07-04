import React from "react";
import { Link } from "react-router-dom";

export default function BoardApp() {
  return (
    <div>
      <h1>커뮤니티</h1>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <Link to={`/community/list/${i}`}>팀</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
