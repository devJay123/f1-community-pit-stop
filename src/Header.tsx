import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo_box">
          <img src="./src/assets/f1_logo_red.svg" alt="logo" />
        </div>
      </Link>
      <ul className="header_links">
        <li>
          <Link to="/community">커뮤니티</Link>
        </li>
        <li>
          <Link to="/rank">순위</Link>
        </li>
        <li>
          <Link to="/prediction">승부예측</Link>
        </li>
        <li>
          <Link to="/login">로그인/회원가입</Link>
        </li>
      </ul>
    </div>
  );
}
