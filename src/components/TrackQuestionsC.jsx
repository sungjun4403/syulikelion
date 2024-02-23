import React, { useState } from 'react';
import ifEmpty from './CustomValidation'
import axios from 'axios'

function TrackQuestions({ selectedTrack }) {

  return (
    <div className={`question ${selectedTrack ? 'fadeIn' : ''}`}>
      <form>
      {selectedTrack === 'frontend' && (
        <>
        <div className='question-container1'>
          <p className='A1'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와<span>해당 트랙을 선택하신 이유가 무엇인가요?</span></p>
          <textarea id="q1" disabled readOnly className='box1' maxLength="500" />
          

          <p className='A2'>2. 본인의 협업 경험에 대해 소개해 주세요!<span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span></p>
          <textarea id="q2" disabled className='box2' placeholder='300자 이하로 입력해주세요' />
         
          
          <p className='A3'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해<span>설명해주세요.</span></p>
          <textarea id="q3" disabled className='box3'placeholder='500자 이하로 입력해주세요' />
          

          <p className='A4'>4. 다룰 수 있는 프론트엔드 프레임워크 및 라이브러리, <span></span>관련 프로젝트 경험을 기술해 주세요. 
          <span className='a4-desktop-br'></span> 또는, 배우고 싶은 <span></span>프레임워크, 라이브러리를 말해주세요.</p>
          <textarea id="q4" disabled className='box4' placeholder='300자 이하로 입력해주세요' />
          

          <p className='A5'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q5"  disabled className='box5' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요' />
          </div>
        </>
      )}

      {selectedTrack === 'backend' && (
        <>
         <div className='question-container2'>
          <p className='A6'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와<span>해당 트랙을 선택하신 이유가 무엇인가요?</span></p>
          <textarea id="q6" disabled className='box6' placeholder='500자 이하로 입력해주세요' />
          

          <p className='A7'>2. 본인의 협업 경험에 대해 소개해 주세요!<span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span></p>
          <textarea id="q7" disabled className='box7' placeholder='300자 이하로 입력해주세요' />
          
          
          <p className='A8'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해<span>설명해주세요.</span></p>
          <textarea id="q8" disabled className='box8' placeholder='500자 이하로 입력해주세요' />
          

          <p className='A9'>4. 본인이 가장 관심있는 기술(웹, 앱. AI 등)과 이유를 <span />설명해주세요.</p>
          <textarea id="q9" disabled className='box9' placeholder='300자 이하로 입력해주세요' />


          <p className='A10'>5. 본인이 생각하는 백엔드의 특징을 <span />설명해주세요.  </p>
          <textarea id="q10" disabled className='box10' placeholder='300자 이하로 입력해주세요' />
       

          <p className='A11'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q11" disabled className='box11' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요' />
            </div>
        </>
      )}

      {selectedTrack === 'planning' && (
        <>
        <div className='question-container3'>
          <p className='A12'>1. 멋쟁이사자처럼 삼육대학교에 지원하게 된 동기와<span>해당 트랙을 선택하신 이유가 무엇인가요?</span></p>
          <textarea id="q12" disabled className='box12' placeholder='500자 이하로 입력해주세요' />
 

          <p className='A13'>2. 본인의 협업 경험에 대해 소개해 주세요!<span>코딩 또는 디자인 경험이 아니어도 무방합니다.</span> </p>
          <textarea id="q13" disabled className='box13' placeholder='300자 이하로 입력해주세요' />
  
          
          <p className='A14'>3. 삼육멋사와 함께 진행하고 싶은 프로젝트에 대해<span>설명해주세요.</span></p>
          <textarea id="q14" disabled className='box14' placeholder='300자 이하로 입력해주세요' />
        

          <p className='A15'>4. 현재 삼육멋사 12기 페이지에서 사용자 경험을 더욱 <span /> 향상시킬 수 있는 UX/UI 개선 방안을 제안해주세요.</p>
          <textarea id="q15" disabled className='box15' placeholder='300자 이하로 입력해주세요' />
        

          <p className='A16'>5. 역량을 확인할 수 있는 포트폴리오, Github, Notion <span></span>링크가 있다면 첨부해주세요(선택사항)</p>
          <textarea id="q16" disabled className='box16' placeholder='Notion 및 구글 드라이브와 같은 웹 링크를 첨부할 경우 접근 권한을 확인 후 첨부해주세요.' />
 
          </div>
        </>
      )}

      </form>
    </div>
  
  );
}


export default TrackQuestions;

