import React from 'react';

function WeWait() {
    return (
    <>
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
        </>
    );
};

export default WeWait;

