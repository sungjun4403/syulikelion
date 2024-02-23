import React, { useEffect } from 'react';
import Headerlogo from "./img/LIKELION 12th LOGO.png";
import calen from "./img/calen.png";
import calen2 from "./img/calen2.png"
import c1 from "./img/c1.png"
import c2 from "./img/c2.png"
import c3 from "./img/c3.png"
import c4 from "./img/c4.png"
import './cal.css'
import './application.css'
import { Link } from "react-router-dom";
const Application = () => {
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

        const script2 = document.createElement("script");
        script.innerHTML = ` 
                
        $(".que").click(function() {
        $(this).next(".anw").stop().slideToggle(300);
        $(this).toggleClass('on').siblings()
        });
    `;
        script.type = "text/javascript";
        document.body.appendChild(script);
    }, []);
    return(
        <>
        <div className="header-top">
        <div className="header-top-logo">
            <img src={Headerlogo} alt="" />
        </div>
        <div className="header-top-menu">
            <span>About</span>
            <span>지원하기</span>
            <span>지원 내역</span>
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

    <p className="we-wait-top">이런 아기사자를 기다리고 있어요!</p>
    <div className="we-wait-box-par">
        <div className="we-wait-box-par-sub">
            <div className="we-wait-box">
                <p className="we-wait-box-num">01</p>
                <p className="we-wait-box-content">매주 목요일 5시에 진행되는<br />
                    정규 세션에 참여할 수 있는 사람</p>
            </div>
            <div className="we-wait-box" id='we-wait-right'>
                <p className="we-wait-box-num">02</p>
                <p className="we-wait-box-content">외부대학과 교류하며 다양한<br />
                    네트워킹을 쌓고 싶은 사람</p>
            </div>
            <div className="we-wait-box">
                <p className="we-wait-box-num">03</p>
                <p className="we-wait-box-content">개발, 기획 및 UX/UI 디자인에<br />
                    대한 학습 의욕을 가진 사람</p>
            </div>
            <div className="we-wait-box" id="we-wait-right">
                <p className="we-wait-box-num">04</p>
                <p className="we-wait-box-content">끊임없는 열정과 성장에 대한<br />
                    강한 의지를 가진 사람</p>
            </div>
            <div className="we-wait-box">
                <p className="we-wait-box-num">05</p>
                <p className="we-wait-box-content">소통 능력을 바탕으로 원활한<br />
                    협업을 이끌어낼 수 있는 사람<span className="br2"></span></p>
            </div>
            <div className="we-wait-box" id="we-wait-right">
                <p className="we-wait-box-num" >06</p>
                <p className="we-wait-box-content">주도적으로 활동에 참여하고<br />
                    새로운 아이디어를 제안하는 <span className="br">사람</span></p>
            </div>
        </div>
    </div>

    <div className='cal-container'>

<div className='cal-box'> 
<img src={calen}></img>
</div>
<div className="cal-mo">
    <div className="cal-head">
        <h1 className="cal-text">
    멋쟁이사자처럼  삼육대학교<br></br>
    12기 모집일정
    </h1>
    </div>
<div className='cal2-box'> 
<img src={calen2}></img>
</div>

<div className="mo-calen">
<div className="c1">
<img src={c1}></img><br></br>
</div>
<div className="c2">
<img src={c2}></img><br></br>
</div>
<div className="c3">
<img src={c3}></img><br></br>
</div>
<div className="c4">
<img src={c4}></img><br></br>
</div>
</div>

</div>
</div>
        <div className='FAQ-par'>
<p className="FAQ-Title">FAQ</p>
    <p className="FAQ-Subtitle">자주 묻는 질문</p>
    
    <div className="FAQ">
    <div id="Accordion_wrap">
    <div className="qna-box">
        <div className="que">
            <span>코딩 경험이 없어도 지원할 수 있나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>물론입니다. 코딩이나 디자인에 대한 경험이 없어도, 열정과 성장에 대한 의지만 있다면 지원 가능합니다.<br />
                삼육멋사는 새로운 도전에 열려 있는 마음과 원동력을 가진 분들을 기다리고 있어요!</span>
        </div>
    </div>

    <div className="qna-box">
        <div className="que">
            <span>2학기에도 모집하나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>멋쟁이사자처럼은 1년 단위로 활동하므로 2학기에는 모집하지 않습니다.</span>
        </div>
    </div>

    <div className="qna-box">
        <div className="que">
            <span>지원 결과는 어떻게 확인하나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>지원시 작성해주신 이메일 주소로 결과 안내 메일을 보내드립니다.</span>
        </div>
    </div>

    <div className="qna-box">
        <div className="que">
            <span>학년 제한이 있나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>학년 제한은 없습니다. 그러나 1년 단위로 대면 활동이 진행되기 때문에 재학생 신분인 학생의 참여를 권장합니다.</span>
        </div>
    </div>

    <div className="qna-box">
        <div className="que">
            <span>트랙간 중복지원이 가능한가요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>트랙간 중복지원은 절대 불가합니다. 중복 지원자의 경우 지원 내역 모두 무효처리됩니다.</span>
        </div>
    </div>

    <div className="qna-box">
        <div className="que">
            <span>언어모델 생성형 AI를 사용해 자기소개서를 작성해도 되나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>삼육대학교 멋쟁이사자처럼 운영진은 생성형 AI 모델의 결과와 모든 지원 서류 내용을 철저하게 대조하여 평가합니다.<br />
                유사한 내용이 발견될 경우, 이를 평가에 반영할 예정입니다. 자기소개서는 반드시 지원자가 직접 작성하여 주시길 바립니다.</span>
        </div>
        </div>
    </div>
    <div className="qna-box">
        <div className="que">
            <span>동아리 관련 문의는 어디로 하나요?</span>
            <div className="arrow-wrap">
                <span className="arrow-top">↑</span>
                <span className="arrow-bottom">↓</span>
            </div>
        </div>
        <div className="anw">
            <span>카카오톡 채널 ‘멋쟁이사자처럼 삼육대학교’ 1:1 채팅 또는 인스타그램 @likelion_syu 멋쟁이사자처럼 at 삼육대학교<br />
                DM 문의 부탁드립니다</span>
        </div>
        </div>
    </div>
        </div>
    
        </>
    );
};


export default Application;