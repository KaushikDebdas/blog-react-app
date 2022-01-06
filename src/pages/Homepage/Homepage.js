import React from "react";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function homepage() {
  return (
    <>
      <Header></Header>
      <div className="home">
          <Posts></Posts>
          <Sidebar></Sidebar>
      </div>
    </>
  );
}
