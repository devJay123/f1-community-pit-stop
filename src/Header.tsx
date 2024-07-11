import React, {
  useEffect,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [clicked, setClicked] = useState({
    community: false,
    chat: false,
    rank: false,
    schedule: false,
    loginHome: false,
  });

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  const user = sessionStorage.getItem("loginUserid");

  const onClickLogout = () => {
    sessionStorage.clear();
    setClicked({
      community: false,
      chat: false,
      rank: false,
      schedule: false,
      loginHome: true,
    });

    window.location.href = "/";
  };

<<<<<<< HEAD
  const isSignup = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
=======
  const isSignup = (e: ReactMouseEvent<HTMLAnchorElement>) => {
>>>>>>> 689c30872118a955c3c59720fa875acff57fd646
    if (!user) {
      alert("회원만 가능합니다.");
      e.preventDefault();
      return;
    }
    setClicked({
      community: false,
      chat: true,
      rank: false,
      schedule: false,
      loginHome: false,
    });
  };

  useEffect(() => {
    switch (pathname) {
      case "community":
      case "boards":
        setClicked({
          community: true,
          chat: false,
          rank: false,
          schedule: false,
          loginHome: false,
        });
        break;
      case "rank":
        setClicked({
          community: false,
          chat: false,
          rank: true,
          schedule: false,
          loginHome: false,
        });
        break;
      case "prediction":
        setClicked({
          community: false,
          chat: false,
          rank: false,
          schedule: true,
          loginHome: false,
        });
        break;
      case "loginHome":
        setClicked({
          community: false,
          chat: false,
          rank: false,
          schedule: false,
          loginHome: true,
        });
        break;
      default:
        setClicked({
          community: false,
          chat: false,
          rank: false,
          schedule: false,
          loginHome: false,
        });
    }
  }, [pathname]);

  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setClicked({
            community: false,
            chat: false,
            rank: false,
            schedule: false,
            loginHome: false,
          });
        }}
      >
        <div className="logo_box">
          <h1 style={{ fontSize: "18px" }}>
            <img src="/src/assets/f1_logo_red.svg" alt="logo" />
            Pit Stop
          </h1>
        </div>
      </Link>
      <ul className="header_links">
        <li className={`${clicked.community ? "clicked" : ""}`}>
          <Link
            onClick={() => {
              setClicked({
                community: true,
                chat: false,
                rank: false,
                schedule: false,
                loginHome: false,
              });
            }}
            to="/community"
          >
            커뮤니티
          </Link>
        </li>
        <li className={`${clicked.chat ? "clicked" : ""}`}>
          <Link
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
              isSignup(e)
            }
            to="/chat"
            state={{ userid: user }}
          >
            채팅
          </Link>
        </li>
        <li className={`${clicked.rank ? "clicked" : ""}`}>
          <Link
            onClick={() => {
              setClicked({
                community: false,
                chat: false,
                rank: true,
                schedule: false,
                loginHome: false,
              });
            }}
            to="/rank"
          >
            순위
          </Link>
        </li>
        <li className={`${clicked.schedule ? "clicked" : ""}`}>
          <Link
            onClick={() => {
              setClicked({
                community: false,
                chat: false,
                rank: false,
                schedule: true,
                loginHome: false,
              });
            }}
            to="/schedule"
          >
            경기일정
          </Link>
        </li>
        <li className={`${clicked.loginHome ? "clicked" : ""}`}>
          {!user ? (
            <Link
              onClick={() => {
                setClicked({
                  community: false,
                  chat: false,
                  rank: false,
                  schedule: false,
                  loginHome: true,
                });
              }}
              to="/loginHome"
            >
              로그인/회원가입
            </Link>
          ) : (
            <Link to="/" onClick={onClickLogout}>
              로그아웃
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}
