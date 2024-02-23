import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrackQuestionsC from './TrackQuestionsC';
import './recruit.css';
import '../App.css';
import { Link } from "react-router-dom";
import Headerlogo from "./img/LIKELION 12th LOGO.png";

function ViewFormSuccess () {    
    const location = useLocation();
    const response = { ...location.state };
    const [isGood, setIsGood] = useState(null);
    const [canParticipate, setCanParticipate] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    const handleTrackSelection = (track) => {
        setSelectedTrack(track);
    }

    useEffect(() => {
        setValue()
      }, []);

    function setValue() {
        document.getElementById('nameInput').value = response.name
        document.getElementById('gradeInput').value = response.studentNum
        document.getElementById('callInput').value = response.mobileNum
        document.getElementById('mailInput').value = response.email
        // handleTrackSelection('planning')
          
        if (response.track == 'frontend') {
            handleTrackSelection('frontend')
            setTimeout(function(){
                document.getElementById('q1').value = response.q1Motivation
                document.getElementById('q2').value = response.q2Experience
                document.getElementById('q3').value = response.q3ProjectToDo
                document.getElementById('q4').value = response.q4Track1
                document.getElementById('q5').value = response.portfolio
            }, 200);
            
   
        } else if (response.track == 'backend') {
            handleTrackSelection('backend')
            setTimeout(function() {
                document.getElementById('q6').value = response.q1Motivation
                document.getElementById('q7').value = response.q2Experience
                document.getElementById('q8').value = response.q3ProjectToDo
                document.getElementById('q9').value = response.q4Track1
                document.getElementById('q10').value = response.q5Track2
                document.getElementById('q11').value = response.portfolio
                document.getElementById('backendSubmit').style.display = 'none'
                
            }, 200);
            
            
        } else if (response.track == 'planning') {
            handleTrackSelection('planning')
            setTimeout(function() {
                document.getElementById('q12').value = response.q1Motivation
                document.getElementById('q13').value = response.q2Experience
                document.getElementById('q14').value = response.q3ProjectToDo
                document.getElementById('q15').value = response.q4Track1
                document.getElementById(' q16').value = response.portfolio
                document.getElementById('planningSubmit').style.display = 'none'
               
            }, 200)
            
        }
        if (response.ifHasLaptop) {
            setIsGood(true)
        } else {
            setIsGood(false)
        }
        if (response.ifSession) {
            setCanParticipate(true)
        } else {
            setCanParticipate(false)
        }
    }

    return (
        // <div className="App"  style={{ height: calculateHeight() }}>
        <>
        <div className="header-top" id='recruit-header'>
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
          <span className="RecruitHistoryButton">지원내역</span>
        
        </div>
    </div>
        <div className="App">
            <section>
                <ul className='information'>

                <li className='guide unselectable'>
                    멋쟁이사자처럼 삼육대학교 지원내역
                </li>

                <li className="name unselectable">이름</li>
                <input
                    id="nameInput" 
                    type="text" 
                    name="nameInput" 
                    placeholder="이름을 입력해주세요"
                    disabled
                />

                <div>
                <li className="grade unselectable">학번</li>
                <input
                    type='text'
                    id="gradeInput"
                    name="gradeInput"
                    placeholder="학번을 입력해주세요"
                    disabled
                    />
                </div>

                <li className="call unselectable">전화번호</li>
                    <input
                    type='text'
                    id="callInput"
                    name="callInput"
                    placeholder="010-XXXX-XXXX"
                    disabled
                    />


                <li className="mail unselectable">메일</li>
                    <input
                    type='text'
                    id="mailInput"
                    name="mailInput"
                    placeholder="likelion36@likelion.org"
                    disabled
                    />

                <li className='notebook' style={{"marginTop" : "40px"}}>노트북 소지여부</li>
                    <div className="button-group1">
                    <button
                        id="laptopChecked"
                        className={`circle-button ${isGood === true ? 'selected' : ''}`}
                        >
                    </button>
                    <span1>예, 노트북을 소지하고 있습니다.</span1>
                    </div>

                    <div className="button-group2">
                    <button
                        className={`circle-button ${isGood === false ? 'selected' : ''}`}
                        >
                    </button>
                    <span2>아니오, 노트북을 소지하고 있지 않습니다.</span2>
                    </div>

                <li className='participate' style={{"marginTop" : "40px"}}>멋쟁이사자처럼 삼육대학교의 정기세션은 <span>매주 목요일 17시입니다. 참여 가능하신가요?</span> </li>
                    <div className="button-group3">
                    <button
                        id="participationChecked"
                        className={`circle-button ${canParticipate === true ? 'selected' : ''}`}
                        >
                    </button>
                    <span3>예, 참여 가능합니다.</span3>
                    </div>

                    <div className="button-group4">
                    <button
                        className={`circle-button ${canParticipate === false ? 'selected' : ''}`}
                         >
                    </button>
                    <span4>아니오, 참여 불가합니다.</span4>
                    </div>

                <li className='choose' style={{"marginTop" : "40px"}}>지원 트랙 선택 </li>
                <div className='Track-choice'>
                    <div className="button-group5">
                    <button className={`box-button frontend-button ${selectedTrack === 'frontend' ? 'selected' : ''}`}>
                        프론트엔드 트랙
                    </button>
                    </div>

                    <div className="button-group6">
                    <button className={`box-button backend-button ${selectedTrack === 'backend' ? 'selected' : ''}`}>
                        백엔드 트랙
                    </button>
                    </div>

                    <div className="button-group7">
                    <button className={`box-button planning-button ${selectedTrack === 'planning' ? 'selected' : ''}`}>
                        기획 · 디자인 트랙
                    </button>
                    </div>
                    </div>

                <li>
                    <TrackQuestionsC selectedTrack={selectedTrack}/>
                </li>
                </ul>
            </section>
        </div>
        </>
    )
}

export default ViewFormSuccess;