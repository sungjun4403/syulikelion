import React from "react";
import "../App.css";
import Headerlogo from "./img/LIKELION 12th LOGO.png";
import Cursor from "./img/Cursor.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const LikelionHeader = (props) => {
  return (
    <>
      <div className="header-top">
        <div className="header-top-logo">
          <Link to="/">
          <img src={Headerlogo} alt="" />
          </Link>
        </div>
        <div className="header-top-menu">
        <ScrollLink to="introduce-section" smooth={true} duration={30}>
          <span className="AboutButton">About</span>
        </ScrollLink>
        <Link to="/recruit/intro">
          <span>지원하기</span>
          </Link>
        <Link to="/recruit/form/login">
          <span className="RecruitHistoryButton">지원내역</span>
        </Link>
        </div>
      </div>
      <div className="header-main">
        <div className="header-main-des">
        <p className="slogan-main">
          Growl <span>to</span> Growth
        </p>
        <p className="slogan-sub">멋쟁이사자처럼 삼육대학교 12기와 함께해요</p>
        <div className="apply-button">
        <Link to="/recruit/intro">
          <p>삼육멋사 12기 지원하기</p>
          </Link>
        </div>
        <div className="header-main-img">
          <img src={Cursor} className="Cursor" />
        </div>
        </div>
      </div>
      <div className="header-footer-wrap"> 
      <div className="header-footer"></div>
      </div>
    </>
  );
};

export default LikelionHeader;