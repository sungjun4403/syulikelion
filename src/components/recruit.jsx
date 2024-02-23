import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './recruit.css';
import TrackQuestions from './TrackQuestions';
import ifEmpty from './CustomValidation'
import { Link } from "react-router-dom";
import Headerlogo from "./img/LIKELION 12th LOGO.png";



function recruit() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [password, setPassword] = useState('');
  const [call, setCall] = useState('');
  const [mail, setMail] = useState('');
  const [isGood, setIsGood] = useState(null);
  const [canParticipate, setCanParticipate] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackAnswers, setTrackAnswers] = useState(Array(16).fill(''));
  const [trackMissing, setTrackMissing] = useState(Array(16).fill(false));
  const optionalFields = [4, 10, 15];
  const onSubmit = (answers) => {
    // onSubmit 함수의 내용을 작성
    // ...
  };

  const handleTrackAnswerChange = (index, value) => {
    const newAnswers = [...trackAnswers];
    newAnswers[index] = value;
    setTrackAnswers(newAnswers);

    if (optionalFields.includes(index)) return;

    const newMissing = [...trackMissing];
    newMissing[index] = value.trim() === '';
    setTrackMissing(newMissing);
  };

  const [validation, setValidation] = useState({
    name: true,
    grade: true,
    password: true,
    call: true,
    mail: true,
  });
  const handleTrackSelection = (track) => {
    setSelectedTrack(track);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // App.js의 입력 검증
    const newValidation = {
        name: !!name.trim(),
        grade: !!grade.trim(),
        password: !!password.trim(),
        call: !!call.trim(),
        mail: !!mail.trim(),
        notebook: isGood !== null,
        session: canParticipate !== null
    };


    // TrackQuestions의 입력 검증
    const newTrackMissing = trackAnswers.map((answer, index) => {
      if (optionalFields.includes(index)) return false;
      return answer.trim() === '';
    });

    setValidation(newValidation);
    setTrackMissing(newTrackMissing);

    const isAppValid = Object.values(newValidation).every(Boolean);
    const isTrackValid = !newTrackMissing.some(m => m);

    if (isAppValid && isTrackValid) {
      console.log("제출 성공");
      // 추가 제출 로직...
    } else {
      console.log("유효성 검사 실패");
      // 오류 메시지 처리...
    }
  };

    
  const calculateHeight = () => {
    switch (selectedTrack) {
      case 'frontend':
        return '2982px';
      case 'backend':
        return '3246px';
      case 'planning':
        return '2967px';
      default:
        return '1500px';
    }
  };

  return (
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
          <span>지원하기</span>
        <Link to="/recruit/form/login">
          <span className="RecruitHistoryButton">지원내역</span>
        </Link>
        </div>
    </div>
    <div className="App"  style={{ height: calculateHeight() }}>
      <section>
      
        <ul className='information'>

          <li className='guide'>
            멋쟁이사자처럼 삼육대학교 지원하기
          </li>

          <li className="name">이름</li>
           <input
             type="text" 
             value={name}
             onChange={(e) => setName(e.target.value)}
             id="nameInput" 
             name="nameInput" 
             placeholder="이름을 입력해주세요"
           />
           <span id="nameEM" className="error-message"> * 필수 입력 항목입니다.</span>

          <div>
          <li className="grade">학번</li>
          <input
              type='text'
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              id="gradeInput"
              name="gradeInput"
              placeholder="학번을 입력해주세요"
            />
            <span id="gradeEM" className='error-message'> * 필수 입력 항목입니다.</span>
          </div>

          <li className="password">지원 내역 열람 비밀번호</li>
           <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="passwordInput"
              name="passwordInput"
              placeholder="숫자 4자리를 입력해주세요"
              maxLength={4}
            />
             <span id="passwordEM" className="error-message"> * 필수 입력 항목입니다.</span>

            <p className='ex'>
            ‘지원 내역'에서 학번과 비밀번호가 일치하는 경우에 한해 자신의 제출된 <span>지원서를 확인할 수 있습니다.
            비밀번호를 기억하지 못하는 경우에는 </span><span>재발급(찾기 또는 변경)이 불가합니다.</span>
            </p>
          

          <li className="call">전화번호</li>
            <input
              type='text'
              value={call}
              onChange={(e) => setCall(e.target.value)}
              id="callInput"
              name="callInput"
              placeholder="010-XXXX-XXXX"
            />
          <span id="callEM" className="error-message"> * 필수 입력 항목입니다.</span>


          <li className="mail">메일</li>
            <input
              type='text'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              id="mailInput"
              name="mailInput"
              placeholder="likelion36@likelion.org"
            />

           <span id="mailEM" className="error-message"> * 필수 입력 항목입니다.</span>

            <p className='explain'>
            작성해주신 이메일 주소로 결과 안내 이메일을 발송해 드립니다.
            <br></br>제출 전, 올바른 이메일 주소를 입력하셨는지 확인하여 주시기 바랍니다.
            </p>

          <li className='notebook'>노트북 소지여부</li>
            <div className="button-group1">
              <button
                id="laptopChecked"
                className={`circle-button ${isGood === true ? 'selected' : ''}`}
                onClick={() => setIsGood(true)}>
              </button>
              <span1>예, 노트북을 소지하고 있습니다.</span1>
            </div>

            <div className="button-group2">
              <button
                className={`circle-button ${isGood === false ? 'selected' : ''}`}
                onClick={() => setIsGood(false)}>
              </button>
              <span2>아니오, 노트북을 소지하고 있지 않습니다.</span2>
              
            </div>
            <p className="notebook-info">
              멋쟁이사자처럼의 활동에는 개인 노트북이 필요하며 <span>동아리에서는 노트북을 지원하지 않습니다.</span>
            </p>

          <li className='participate'>멋쟁이사자처럼 삼육대학교의 정기세션은 <span>매주 목요일 17시입니다. 참여 가능하신가요?</span> </li>
            <div className="button-group3">
              <button
                id="participationChecked"
                className={`circle-button ${canParticipate === true ? 'selected' : ''}`}
                onClick={() => setCanParticipate(true)}>
              </button>
              <span3>예, 참여 가능합니다.</span3>
            </div>

            <div className="button-group4">
              <button
                className={`circle-button ${canParticipate === false ? 'selected' : ''}`}
                onClick={() => setCanParticipate(false)}>
              </button>
              <span4>아니오, 참여 불가합니다.</span4>
            </div>

            
            

            <p className='participate-info'>멋쟁이사자처럼 삼육대학교의 정기세션은 필수 참여입니다.</p>
         

          <li className='choose'>지원 트랙 선택 </li>
          <div className='Track-choice'>
            <div className="button-group5">
              <button className={`box-button frontend-button ${selectedTrack === 'frontend' ? 'selected' : ''}`} onClick={() => handleTrackSelection('frontend')}>
                프론트엔드 트랙
              </button>
            </div>

            <div className="button-group6">
              <button className={`box-button backend-button ${selectedTrack === 'backend' ? 'selected' : ''}`} onClick={() => handleTrackSelection('backend')}>
                백엔드 트랙
              </button>
            </div>

            <div className="button-group7">
              <button className={`box-button planning-button ${selectedTrack === 'planning' ? 'selected' : ''}`} onClick={() => handleTrackSelection('planning')}>
                기획 · 디자인 트랙
              </button>
            </div>
            </div>

          <li>
            <TrackQuestions selectedTrack={selectedTrack} onAnswerChange={handleTrackAnswerChange} onSubmit={handleSubmit} />
          </li>
        </ul>
      </section>
    </div>
    </> 
  );
}

export default recruit;
