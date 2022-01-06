import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/kaushik.debdas/" target='_blank'><i className="topIcon fa-brands fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com/in/kaushik-debdas-233589208/" target="_blank"><i className="topIcon fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/KaushikDebdas" target="_blank"><i className="topIcon fa-brands fa-github-square"></i></a>
        <a href="https://twitter.com/debdas_kaushik" target="_blank"><i className="topIcon fa-brands fa-twitter-square"></i></a> 
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
