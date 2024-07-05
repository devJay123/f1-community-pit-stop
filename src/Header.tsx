import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header container">
      <Link to="/home">LOGO</Link>
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

        <li>
          <Link to="/templist">임시[게시글 리스트]</Link>
        </li>
        <li>
          <Link to="/tempform">임시[게시글 작성]</Link>
        </li>
        <li>
          <Link to="/tempedit">임시[게시글 수정]</Link>
        </li>
        <li>
          <Link to="/boards/1">임시[게시글 댓글]</Link>
        </li>
      </ul>
      <button className="btn">등록</button>
    </div>
  );
}
