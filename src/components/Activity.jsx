import React from 'react';

const Activity = () => {
  return (
    <>
      <p className="Activity-Ex">12기 아기사자들과 함께할 활동들이 기다리고 있어요!</p>
      <p className='Activity-Ex-Mobile'></p>
      <div className="Activity">
        <div className="Activity-Box" id="Activity-Box-A">
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">함께 공부하는 <span>정기 세션</span></div>
            <div className="Activity-Box-Detail-Ex">매주 진행되는 동아리 정기세션을 통해<br />
              웹개발의 기초부터 심화까지 함께 공부합니다.</div>
            <div className="Activity-Box-Detail-Schedule">
              <p><span>일시</span>매주 목요일 5시</p>
              <p><span>장소</span>(대면)추후 공지  (비대면)Google Meet</p>
              <p className='activity-notice'>*시험기간에는 세션을 진행하지 않습니다</p>
            </div>
          </div>
          <div className="Activity-Box-Img" id='regular-session'></div>
        </div>
        <div className="Activity-Box" id="Activity-Box-B">
          <div className="Activity-Box-Img" id='idea-thon'></div>
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">창의적인 경쟁의 순간, <span>아이디어톤</span></div>
            <div className="Activity-Box-Detail-Ex">상상 속 나만의 서비스를 구체화합니다.<br />
              모두에게 나의 가능성을 보여주세요.</div>
            <div className="Activity-Box-Detail-Schedule">
              <p><span>일시</span>5월 중</p>
              <p><span>장소</span>(대면)추후 공지</p>
            </div>
          </div>
        </div>
        <div className="Activity-Box" id="Activity-Box-A">
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">전국 연합 해커톤</div>
            <div className="Activity-Box-Detail-Ex">멋쟁이사자처럼 소속 NN개의 모든 대학이 모여<br />
              아이디어를 구현해내는 축제의 장입니다.<br />
              서비스의 탄생을 직접 경험해보세요.</div>
            <div className="Activity-Box-Detail-Schedule">
              <p><span>일시</span>8월 중</p>
              <p><span>장소</span>(대면)추후 공지</p>
            </div>
          </div>
          <div className="Activity-Box-Img" id='hackerthon'></div>
        </div>
        <div className="Activity-Box" id="Activity-Box-B">
          <div className="Activity-Box-Img" id='univ-hackerthon'></div>
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">대학 연합 해커톤 & 세션</div>
            <div className="Activity-Box-Detail-Ex">멋쟁이사자처럼 소속 대학들과 연합하여<br />
              해커톤 또는 세션을 진행하며 함께 성장합니다.</div>
          </div>
        </div>
        <div className="activity-mobile-x">
        <div className="Activity-Box" id="Activity-Box-A">
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">공모전</div>
            <div className="Activity-Box-Detail-Ex">한국과 미국 멋쟁이사자처럼에 소속된<br />아기사자들이 모여 트랙별 공모전을 통해<br />우수 인재로 성장합니다.</div>
          </div>
          <div className="Activity-Box-Img" id='competition'></div>
        </div>
        <div className="Activity-Box" id="Activity-Box-B">
          <div className="Activity-Box-Img" id='demoday'></div>
          <div className="Activity-Box-Detail">
            <div className="Activity-Box-Detail-Title">데모데이</div>
            <div className="Activity-Box-Detail-Ex">멋쟁이사자처럼에 소속된 학생들이<br></br>
            열과 성을 다해 만들어 낸<br></br>
            초기 스타트업을 소개하는 행사입니다.</div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Activity;