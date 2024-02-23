import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ifEmpty from './CustomValidation'
import axios from 'axios'

function TrackQuestions({ selectedTrack,onSubmit }) {
  const navigate = useNavigate();
  // 각 질문에 대한 상태
  const [answer5, setAnswer5] = useState('');
  const [answer11, setAnswer11] = useState('');
  const [answer16, setAnswer16] = useState('');

  const [answers, setAnswers] = useState(Array(16).fill(''));
  const [missing, setMissing] = useState(Array(16).fill(false));
  const optionalFields = [4, 10, 15];

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
    
    if (optionalFields.includes(index)) return;

    const newMissing = [...missing];
    newMissing[index] = event.target.value.trim() === '';
    setMissing(newMissing);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const newMissing = answers.map((answer, index) => {
      if (optionalFields.includes(index)) return false;
      return answer.trim() === '';
    });

    setMissing(newMissing);

    const isAnyRequiredMissing = newMissing.some(m => m);
    if (!isAnyRequiredMissing) {
      onSubmit(answers); // 모든 필수 필드가 채워졌을 경우 answers 전달
    }
  };

  const allValid = false;

  const submitForm = () => {
    var q1Motivation = "";
    var q2Experience = "";
    var q3ProjectToDo = "";
    var q4Track1 = "";
    var q5Track2 = "";
    var portfolio = "";
    var ifHasLaptop = "";
    var ifPartcipation = "";
    var track = "";

    if (document.getElementById("laptopChecked").className == "circle-button selected") {
      ifHasLaptop = true
    }

    if (document.getElementById("participationChecked").className == "circle-button selected") {
      ifPartcipation = true
    }

    if (selectedTrack == "frontend") {
      q1Motivation = document.getElementById("q1").value 
      q2Experience = document.getElementById("q2").value 
      q3ProjectToDo = document.getElementById("q3").value 
      q4Track1 = document.getElementById("q4").value 
      q5Track2 = "null"
      portfolio = document.getElementById("q5").value 
      track = "frontend"

    } else if (selectedTrack == "backend") {
      q1Motivation = document.getElementById("q6").value 
      q2Experience = document.getElementById("q7").value 
      q3ProjectToDo = document.getElementById("q8").value 
      q4Track1 = document.getElementById("q9").value 
      q5Track2 = document.getElementById("q10").value 
      portfolio = document.getElementById("q11").value
      track = "backend" 

    } else if (selectedTrack == "planning") {
      q1Motivation = document.getElementById("q12").value 
      q2Experience = document.getElementById("q13").value 
      q3ProjectToDo = document.getElementById("q14").value 
      q4Track1 = document.getElementById("q15").value 
      q5Track2 = "null"
      portfolio = document.getElementById("q16").value 
      track = "planning"
    }
    if (document.getElementById("laptopChecked").value) {

    }
    if (document.getElementById("participationChecked").value) {
      
    }
    axios({
      method: 'post',
      url: 'https://api.syulikelion.com/recruit/form/create',
      data: {
        name: document.getElementById("nameInput").value,
        studentNum: document.getElementById("gradeInput").value,
        email: document.getElementById("mailInput").value,
        mobileNum: document.getElementById("callInput").value,
        gender: "",
        q1Motivation: q1Motivation,
        q2Experience: q2Experience,
        q3ProjectToDo: q3ProjectToDo,
        q4Track1: q4Track1,
        q5Track2: q5Track2,
        ifHasLaptop: ifHasLaptop,
        ifSessionAvaliable: ifPartcipation,
        portfolio: portfolio,
        password: document.getElementById("passwordInput").value,
        track: track
        // name: document.getElementById("nameInput").value
      }
    }).then((response) => {
      if (response.status == 201) {
        navigate( '/return', { 
          state: {
          }
        })
      }
      else if (response.status == 400) {
        window.alert("제출 양식 오류입니다. 반복적으로 오류가 발생하면 카카오톡 멋사 플러스친구 또는 인스타그램으로 연락해주세요");
      }
    })
  }

  const validateAll = (trackToValidate) => {
    console.log(missing)
    for (let i = 0; i < 16; i++) {
      if (i == 4 || i == 10 || i == 15) {
        continue
      }
      try {
        if (document.getElementById("q" + (i+1).toString()).value != "") {
          continue
        }
        document.getElementById("q" + (i+1).toString()).style.backgroundColor = 'rgba(237, 245, 254, 1)';  
        document.getElementById("q" + (i+1).toString()).style.border = '1px solid rgba(74, 155, 246, 1)';
      } catch(error) {
        continue
      }
    }
    ifEmpty("nameInput", "nameEM");
    ifEmpty("gradeInput", "gradeEM");
    ifEmpty("passwordInput", "passwordEM");
    ifEmpty("callInput", "callEM");
    ifEmpty("mailInput", "mailEM");
    if (
      !(ifEmpty("nameInput", "nameEM")) &&
      !(ifEmpty("gradeInput", "gradeEM")) &&
      !(ifEmpty("passwordInput", "passwordEM")) &&
      !(ifEmpty("callInput", "callEM")) &&
      !(ifEmpty("mailInput", "mailEM")) &&
      (document.getElementById("laptopChecked").className == "circle-button selected") &&
      (document.getElementById("participationChecked").className == "circle-button selected")    
    ) {
      if (trackToValidate == "frontend") {
        if (
          document.getElementById("q1").value != "" &&
          document.getElementById("q2").value != "" &&
          document.getElementById("q3").value != "" &&
          document.getElementById("q4").value != "" 
        ) {
          submitForm()
        }
      }
      if (trackToValidate == "backend") {
        if (
          document.getElementById("q6").value != "" &&
          document.getElementById("q7").value != "" &&
          document.getElementById("q8").value != "" &&
          document.getElementById("q9").value != "" &&
          document.getElementById("q10").value != ""
        ) {
          submitForm()
        }
      }
      if (trackToValidate == "planning") {
        if(
          
          document.getElementById("q12").value != "" &&
          document.getElementById("q13").value != "" &&
          document.getElementById("q14").value != "" &&
          document.getElementById("q15").value != ""
        ) {
          submitForm()
        }
        else {
        }
      }
    }
    else {
    }
  }
 

  return (
    <div className={`question ${selectedTrack ? 'fadeIn' : ''}`}>
      <form onSubmit={handleSubmit}>
      {selectedTrack === 'frontend' && (
        <>
        <div className='question-container1'>
          <p className='A1'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 <span>해당 트랙을 선택하신 이유가 무엇인가요?</span> ({answers[0].length}/500) {missing[0] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q1" className='box1' placeholder='500자 이하로 입력해주세요' value={answers[0]} onChange={(e) => handleAnswerChange(0, e)} maxLength="500" />
          

          <p className='A2'>2. 본인의 협업 경험에 대해 소개해 주세요! <span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span> ({answers[1].length}/300) {missing[1] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q2" className='box2' placeholder='300자 이하로 입력해주세요'value={answers[1]} onChange={(e) => handleAnswerChange(1, e)} maxLength="300" />
         
          
          <p className='A3'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 <span>설명해주세요.</span> ({answers[2].length}/500) {missing[2] && <span className="error-message">* 필수 입력 항목입니다</span>} </p>
          <textarea id="q3" className='box3'placeholder='500자 이하로 입력해주세요' value={answers[2]} onChange={(e) => handleAnswerChange(2,e)} maxLength="500" />
          

          <p className='A4'>4. 다룰 수 있는 프론트엔드 프레임워크 및 라이브러리, <span></span>관련 프로젝트 경험을 기술해 주세요. 
          <span className='a4-desktop-br'></span> 또는, 배우고 싶은 <span></span>프레임워크, 라이브러리를 말해주세요. ({answers[3].length}/300){missing[3] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q4" className='box4' placeholder='300자 이하로 입력해주세요' value={answers[3]} onChange={(e) => handleAnswerChange(3,e)} maxLength="300"/>
          

          <p className='A5'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q5"  className='box5' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요' onChange={(e)=>handleAnswerChange(setAnswer5,e)}/>
          <button onClick={() => {
            validateAll("frontend")
          }} type="submit" className="submit-button submit-frontend">지원서 제출하기 →</button>

          </div>
        </>
      )}

      {selectedTrack === 'backend' && (
        <>
         <div className='question-container2'>
          <p className='A6'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 <span>해당 트랙을 선택하신 이유가 무엇인가요?</span> ({answers[5].length}/500) {missing[5] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q6" className='box6' placeholder='500자 이하로 입력해주세요' value={answers[5]} onChange={(e) => handleAnswerChange(5, e)} maxLength="500" />
          

          <p className='A7'>2. 본인의 협업 경험에 대해 소개해 주세요! <span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span>  ({answers[6].length}/300) {missing[6] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q7" className='box7' placeholder='300자 이하로 입력해주세요' value={answers[6]} onChange={(e) => handleAnswerChange(6, e)} maxLength="300" />
          
          
          <p className='A8'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 <span>설명해주세요.</span> ({answers[7].length}/500) {missing[7] && <span className="error-message">* 필수 입력 항목입니다</span>} </p>
          <textarea id="q8" className='box8' placeholder='500자 이하로 입력해주세요' value={answers[7]} onChange={(e) => handleAnswerChange(7,e)} maxLength="500" />
          

          <p className='A9'>4. 본인이 가장 관심있는 기술(웹, 앱. AI 등)과 이유를 <span />설명해주세요.  ({answers[8].length}/300) {missing[8] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q9" className='box9' placeholder='300자 이하로 입력해주세요' value={answers[8]} onChange={(e) => handleAnswerChange(8,e)} maxLength="300"/>


          <p className='A10'>5. 본인이 생각하는 백엔드의 특징을 <span />설명해주세요.  ({answers[9].length}/300) {missing[9] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q10" className='box10' placeholder='300자 이하로 입력해주세요' value={answers[9]} onChange={(e) => handleAnswerChange(9,e)} maxLength="300" />
       

          <p className='A11'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q11" className='box11' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요' onChange={(e)=>handleAnswerChange(setAnswer11,e)}/>
          <button onClick={() => {
            validateAll("backend")
          }
            } type="submit" className="submit-button submit-backend" id='backendSubmit'>지원서 제출하기 →</button>
            </div>
        </>
      )}

      {selectedTrack === 'planning' && (
        <>
        <div className='question-container3'>
          <p className='A12'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와 <span>해당 트랙을 선택하신 이유가 무엇인가요?</span> ({answers[11].length}/500) {missing[11] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q12" className='box12' placeholder='500자 이하로 입력해주세요' value={answers[11]} onChange={(e) => handleAnswerChange(11, e)} maxLength="500" />
 

          <p className='A13'>2. 본인의 협업 경험에 대해 소개해 주세요! <span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span> ({answers[12].length}/300){missing[12] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q13" className='box13' placeholder='300자 이하로 입력해주세요' value={answers[12]} onChange={(e) => handleAnswerChange(12, e)} maxLength="300" />
  
          
          <p className='A14'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해 <span>설명해주세요.</span> ({answers[13].length}/300) {missing[13] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q14" className='box14' placeholder='300자 이하로 입력해주세요' value={answers[13]} onChange={(e) => handleAnswerChange(13,e)} maxLength="300" />
        

          <p className='A15'>4. 현재 삼육멋사 12기 페이지에서 사용자 경험을 더욱 <span /> 향상시킬 수 있는 UX/UI 개선 방안을 제안해주세요.<span></span> ({answers[14].length}/300) {missing[14] && <span className="error-message">* 필수 입력 항목입니다</span>}</p>
          <textarea id="q15" className='box15' placeholder='300자 이하로 입력해주세요' value={answers[14]} onChange={(e) => handleAnswerChange(14,e)} maxLength="300"/>
        

          <p className='A16'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q16" className='box16' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요.' onChange={(e)=>handleAnswerChange(setAnswer16,e)}/>

          {/* <button onClick={ifEmpty("sampleTextArea", "sampleMessage")}>validate</button> */}


          <button onClick={() => {
            validateAll("planning");
          }
            } type="submit" className="submit-button submit-planning" id="planningSubmit">지원서 제출하기 →</button>
          {/* <button onClick={onSubmit} type="submit" className="submit-button submit-planning">지원서 제출하기</button> */}
          </div>
        </>
      )}

      </form>
    </div>
  
  );
}


export default TrackQuestions;

