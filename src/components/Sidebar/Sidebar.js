import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          dolore sint earum culpa.
        </p>
      </div>
      {/* CATEGORIES */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      {/* FOLLOW US */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/kaushik.debdas/" target='_blank'><i className="sidebarIcon fa-brands fa-facebook-square"></i></a>
        <a href="https://www.linkedin.com/in/kaushik-debdas-233589208/" target="_blank"><i className="sidebarIcon fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/KaushikDebdas" target="_blank"><i className="sidebarIcon fa-brands fa-github-square"></i></a>
        <a href="https://twitter.com/debdas_kaushik" target="_blank"><i className="sidebarIcon fa-brands fa-twitter-square"></i></a>
        
        </div>
      </div>
    </div>
  );
}
