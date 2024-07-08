import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [clicked, setClicked] = useState({
    community: false,
    rank: false,
    prediction: false,
    loginHome: false,
  });

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setClicked({
            community: false,
            rank: false,
            prediction: false,
            loginHome: false,
          });
        }}
      >
        <div className="logo_box">
          <img src="./src/assets/f1_logo_red.svg" alt="logo" />
        </div>
      </Link>
      <ul className="header_links">
        <li
          className={`${clicked.community ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: true,
              rank: false,
              prediction: false,
              loginHome: false,
            });
          }}
        >
          <Link to="/community">커뮤니티</Link>
        </li>
        <li
          className={`${clicked.rank ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: false,
              rank: true,
              prediction: false,
              loginHome: false,
            });
          }}
        >
          <Link to="/rank">순위</Link>
        </li>
        <li
          className={`${clicked.prediction ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: false,
              rank: false,
              prediction: true,
              loginHome: false,
            });
          }}
        >
          <Link to="/prediction">승부예측</Link>
        </li>
        <li
          className={`${clicked.loginHome ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: false,
              rank: false,
              prediction: false,
              loginHome: true,
            });
          }}
        >
          <Link to="/loginHome">로그인/회원가입</Link>
        </li>
      </ul>
    </div>
  );
}
