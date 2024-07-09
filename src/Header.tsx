import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [clicked, setClicked] = useState({
    community: false,
    rank: false,
    schedule: false,
    loginHome: false,
  });

  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  const user = sessionStorage.getItem('loginUserid');

  const onClickLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  useEffect(() => {
    switch (pathname) {
      case 'community':
      case 'boards':
        setClicked({
          community: true,
          rank: false,
          schedule: false,
          loginHome: false,
        });
        break;
      case 'rank':
        setClicked({
          community: false,
          rank: true,
          schedule: false,
          loginHome: false,
        });
        break;
      case 'prediction':
        setClicked({
          community: false,
          rank: false,
          schedule: true,
          loginHome: false,
        });
        break;
      case 'loginHome':
        setClicked({
          community: false,
          rank: false,
          schedule: false,
          loginHome: true,
        });
        break;
      default:
        setClicked({
          community: false,
          rank: false,
          schedule: false,
          loginHome: false,
        });
    }
  }, []);

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setClicked({
            community: false,
            rank: false,
            schedule: false,
            loginHome: false,
          });
        }}
      >
        <div className="logo_box">
          <h1 style={{ fontSize: '18px' }}>
            <img src="/src/assets/f1_logo_red.svg" alt="logo" />
            Pit Stop
          </h1>
        </div>
      </Link>
      <ul className="header_links">
        <li
          className={`${clicked.community ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: true,
              rank: false,
              schedule: false,
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
              schedule: false,
              loginHome: false,
            });
          }}
        >
          <Link to="/rank">순위</Link>
        </li>
        <li
          className={`${clicked.schedule ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: false,
              rank: false,
              schedule: true,
              loginHome: false,
            });
          }}
        >
          <Link to="/schedule">경기일정</Link>
        </li>
        <li
          className={`${clicked.loginHome ? 'clicked' : ''}`}
          onClick={() => {
            setClicked({
              community: false,
              rank: false,
              schedule: false,
              loginHome: true,
            });
          }}
        >
          {!user && <Link to="/loginHome">로그인/회원가입</Link>}
          {user && (
            <Link to="" onClick={onClickLogout}>
              로그아웃
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
