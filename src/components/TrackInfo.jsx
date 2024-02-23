import React, { useEffect } from 'react';
import frontend from './img/front-end.png';
import uiux from './img/uiux.png';
import backend from './img/back-end.png';

const TrackInfo = () => {
  useEffect(() => {
  // window.onresize = function(){
  //   document.location.reload();
  // };
      let start_x, end_x;
      
      var TrackInfoMain = document.querySelector('.Track-Info-Main');
      TrackInfoMain.addEventListener('touchstart', touchStart);
      TrackInfoMain.addEventListener('touchend', touchEnd);

      function touchStart(e){
        start_x = e.touches[0].pageX;
      }

      function touchEnd(e){
        end_x = e.changedTouches[0].pageX;
        if(start_x > end_x){
          next();
        } else{
          prev();
        }
      }
    })
    function prev(){
      var TrackInfoMain = document.querySelector('.Track-Info-Main');
      var curpos = document.querySelector('.curpos');
      
      if(TrackInfoMain.style.transform=='translateX(-100vw)'){
      TrackInfoMain.style.transform='translateX(-20vw)';
      curpos.innerHTML = '<span style="color:#4A9BF6">●</span><span style="color:#D6D6D6">●●</span>'
      } else if(TrackInfoMain.style.transform=='translateX(-20vw)'){
        TrackInfoMain.style.transform='translateX(-175vw)';
        curpos.innerHTML = '<span style="color:#D6D6D6">●●</span><span style="color:#4A9BF6">●</span>'
      } else{
        TrackInfoMain.style.transform='translateX(-100vw)';
        curpos.innerHTML = '<span style="color:#D6D6D6">●</span><span style="color:#4A9BF6">●</span><span style="color:#D6D6D6">●</span>'
      }
    }

    function next(){
      var TrackInfoMain = document.querySelector('.Track-Info-Main');
      var curpos = document.querySelector('.curpos');

      if(TrackInfoMain.style.transform=='translateX(-100vw)'){
        TrackInfoMain.style.transform='translateX(-175vw)';
        curpos.innerHTML = '<span style="color:#D6D6D6">●●</span><span style="color:#4A9BF6">●</span>'
        } else if(TrackInfoMain.style.transform=='translateX(-20vw)'){
          TrackInfoMain.style.transform='translateX(-100vw)';
          curpos.innerHTML = '<span style="color:#D6D6D6">●</span><span style="color:#4A9BF6">●</span><span style="color:#D6D6D6">●</span>'
        } else{
          TrackInfoMain.style.transform='translateX(-20vw)';
          curpos.innerHTML = '<span style="color:#4A9BF6">●</span><span style="color:#D6D6D6">●●</span>'
        }
    }
return (
    <>
    <div className="Track-Info">
        <div className="Track-Info-Top">
        <p>멋쟁이사자처럼 삼육대학교에서 세분화된 트랙별 교육으로 함께 성장해요!</p>
        </div>
        <div className="Track-Info-Top-Mobile">
          <p></p>
        </div>
      <div className="Track-Info-Main">
        <div className="Track-Box">
          <div className="Track-Box-Img" id='front'>
            <img src={frontend} />
          </div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">프론트엔드</p>
            <p className="Track-Box-Detail-Ex">
              웹 페이지의 시각적인 부분을 담당하는 <span />프론트엔드<br className='Track-br' /> 트랙은 HTML, CSS, JavaScript 등을 활용하여<br className='Track-br' /> 동적이고 효과적인 화면 개발에<span></span> 주력합니다.<br className='Track-br' /> 웹 클라이언트 개발을 위한<span /> 기초부터 심화까지의<br className='Track-br' /> 스킬을 배울 수 있습니다.
            </p>
          </div>
        </div>
        <div className="Track-Box">
          <div className="Track-Box-Img" id='uiux'>
          <img src={uiux} />
          </div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">기획 & UI/UX 디자인</p>
            <p className="Track-Box-Detail-Ex">
              아이디어의 시작부터 현실화까지! 기획 & 디자인<br className='Track-br' /><span /> 트랙은 UI/UX 디자인에 대한 깊은 이해를 통해<br className='Track-br' /><span /> 멋진 사용자 경험을 제공합니다. 서비스를 직접<br className='Track-br' /><span /> 디자인하는 것은 물론이고 서비스 구체화 방안과<br className='Track-br' /><span /> 디자인 방법론을 배울 수 있습니다.
            </p>
          </div>
        </div>
        <div className="Track-Box">
          <div className="Track-Box-Img" id='back'>
          <img src={backend} />
          </div>
          <div className="Track-Box-Detail">
            <p className="Track-Box-Detail-Title">백엔드</p>
            <p className="Track-Box-Detail-Ex">
              사용자 눈에 보이지 않는 서버를 담당하는<span /> 백엔드<br className='Track-br' /> 트랙은 Django, DRF, Spring 등 다양한<span /> 프레임<br className='Track-br' />워크를 바탕으로 서비스 운영을 위한<span /> 전체적인<br className='Track-br' /> 인프라를 구현합니다. 서비스 구현의<span /> API 관리부터 DB 관리까지 배울 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="TrackInfoButton">
        {/* <button className='PrevButton' onClick={prev}>&lt;</button> */}
        <span className="curpos">
          <span id='curpos1'>●</span>
          <span id='curpos2'>●</span>
          <span id='curpos3'>●</span>
          </span>
        {/* <button className='NextButton' onClick={next}>&gt;</button> */}
      </div>
    </div>
    </>
  );
};

export default TrackInfo;