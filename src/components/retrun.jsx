import './return.css'
import React from "react";
import "../App.css";
import Headerlogo from "./img/LIKELION 12th LOGO.png";
import Cursor from "./img/Cursor.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink,animateScroll } from "react-scroll";


function Return() {
    return(
        <>
<div className="header-top" id='return-header-top'>
        <div className="header-top-logo">
        <Link to="/">
          <img src={Headerlogo} alt="" />
          </Link>
        </div>
        <div className="header-top-menu">
        <Link to="/">
          <span className="AboutButton">About</span>
        </Link>
        
        <Link to="/recruit/intro">
          <span>지원하기</span>
          </Link>
        <Link to="/recruit/form/login">
          <span className="RecruitHistoryButton">지원내역</span>
        </Link>
        </div>
      </div>
      
      <div className='return-container'>
        <div className='end-box'>
        <p className='end-text'>지원이 성공적으로 완료되었습니다!</p></div>
       <div className='semi-end-box'>
       <p className='semi-text'>귀중한 시간을 내어 지원해주셔서 감사합니다.</p>
       </div>
       <div className="smallbox-par">
       <div className='smallbox1'>
       <Link to="/recruit/form/login">
       <p className='small-text'>나의 지원 내역 보기</p>
       </Link></div>
       {/* <-- 이 부분에 --> */}
       <div className='smallbox2'>
       <Link to="/">
    <p className='small-text2'>메인 화면으로 돌아가기</p>
  </Link></div>
  </div>


        </div>
    </>
    
    )
}


export default Return;