import React, { useEffect } from 'react';
import Headerlogo from "../img/LIKELION 12th LOGO.png";
import { Link } from "react-router-dom";

const RecruitMain = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.innerHTML = ` 
                
        function updateTimer() {
            const future = Date.parse("2024/03/09 23:59:59");
            const now = new Date();
            const diff = future - now;
    
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const mins = Math.floor(diff / (1000 * 60));
            const secs = Math.floor(diff / 1000);
    
            const d = days;
            const h = hours - days * 24;
            const m = mins - hours * 60;
            const s = secs - mins * 60;
    
            document.getElementById("timer")
            .innerHTML =
            '<div>' + d + ':</div>' +
            '<div>' + h + ':</div>' +
            '<div>' + m + ':</div>' +
            '<div>' + s + '</div>';
    }
    
            setInterval(updateTimer, 1000);
    `;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, []);
    return(
        <>
        <div className="recruit-header-top">
        <div className="recruit-header-top-logo">
        <Link to="/">
          <img src={Headerlogo} alt="" />
          </Link>
        </div>
        <div className="recruit-header-top-menu">
            <Link to="/">
              <span className="AboutButton">About</span>
            </Link>
            <Link to="/recruit/intro">
              <span>지원하기</span>
            </Link>
            <Link to="/recruit/form/login">
              <span>지원내역</span>
            </Link>
        </div>
    </div>
    <div className="recruit-main">
        <div className="recruit-main-title">
            <p>LIKELION at SYU</p>
        </div>
        <div className="recruit-main-countdown">
            <p>삼육멋사 12기 모집 마감까지</p>
            <div id="timer"></div>
        </div>
        <div className="recruit-button">
        <Link to="/recruit">
            <span>지원서 작성하기</span>
        </Link>
        </div>
    </div>
        </>
    );
};

export default RecruitMain;

