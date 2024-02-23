import React from 'react';
import logo from './img/logo.png';  
import './Introduce.css'
function Introduce() {
  return (
    <div id="introduce-section">
    <div className='intro-container'>
      <div className='logo-box'><img src={logo} alt="LIKELION Logo" className='logo'/></div>
      <div className='head-box'>
        <div className="title-box">
        <h1>LIKELION at SYU</h1>
        <h2>멋쟁이사자처럼 삼육대학교</h2>
        </div>
        <p className='introduce-ex'>테크 기반의 아이디어 실현을 위한 <span>전국 최대 규모의 대학 연합 IT 동아리로</span><br /> 
        전공 상관없이 다양한 전공자들이 모여 <span>아이디어를 실현하는 </span><br className='intro-br'/>
        삼육대학교 중앙동아리이자 <span>전국 58개 대학과 함께하는 연합 동아리입니다.</span>
        <p id='intro-desktop-x'></p>
        
        
        </p>
      </div>
      </div>
      </div>
  );
}

export default Introduce;
