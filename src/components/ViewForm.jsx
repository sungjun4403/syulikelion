import axios from "axios";
import './ViewForm.css';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from 'react-router-dom';

import Headerlogo from "./img/LIKELION 12th LOGO.png";

function ViewForm() {
    const navigate = useNavigate();

    function postFormView () {        
        var studentNum = parseInt(document.getElementById("ViewStudentInput").value);
        
        axios({
          method: 'post',
          url: 'https://api.syulikelion.com/recruit/form/view',
          data: {
              studentNum: studentNum,
              password: document.getElementById("ViewPasswordInput").value
          },
          validateStatus: function (status) {
            return status >= 200 && status < 405
          }
        }).then((response) => {
            if (response.status == 200) {
              navigate( '/recruit/form/view', { 
                state: {
                  name : response.data.name,
                  studentNum : response.data.studentNum,
                  email : response.data.email,
                  mobileNum : response.data.mobileNum,
                  q1Motivation : response.data.q1Motivation,
                  q2Experience: response.data.q2Experience,
                  q3ProjectToDo: response.data.q3ProjectToDo,
                  q4Track1: response.data.q4Track1,
                  q5Track2: response.data.q5Track2,
                  ifHasLaptop: response.data.ifHasLaptop,
                  ifSession: response.data.ifSessionAvaliable,
                  portfolio: response.data.portfolio,
                  track: response.data.track
                }
              })
            } else if(response.status == 404) {
              window.alert("학번 또는 비밀번호 입력 오류입니다. 다시 입력해 주세요.");
            }
        })
    }

    return (
        <>
        <div className="header-top" id="ViewHeader">
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
        <div className="ViewFormPar">
        <div className="ViewForm">
            <p className="ViewFormTitle">지원 내역 열람</p>
            <p className="ViewFormEx">지원서에 제출하신 학번과 비밀번호가 일치하는<span /> 경우에 한해 자신의 지원서를 확인할 수 있습니다.<br />
            단순히 지원서의 제출 확인을 위한 것으로, 수정은 불가능합니다.</p>
            <div className="ViewFormInput">
            <div className="ViewFormInputNum"><span className="ViewFormInputEx">학번</span><input id="ViewStudentInput" placeholder="학번을 입력해주세요"></input></div>
            <div className="ViewFormInputPw"><span className="ViewFormInputEx">비밀번호</span><input id="ViewPasswordInput" placeholder="비밀번호 4자리를 입력해주세요"></input></div>
            </div>
            <div className="ViewFormButtonPar">
            <button type="submit" className="ViewFormButton"onClick={postFormView}>나의 지원 내역 보기</button>
            
            </div>
        </div>
        </div>
        </>
    )

} 

export default ViewForm;

