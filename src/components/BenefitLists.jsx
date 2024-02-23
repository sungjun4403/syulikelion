import certification from './img/certification.png'
import id from './img/id.png'
import school from './img/school.png'
import yop from './img/yop.png'
import lamp from './img/lamp.png'
import america from './img/america.png'
import online from './img/online.png'
import './BenefitLists.css';





function BenefitLists() {

    return(
        <div className='beneift-container'>
            <div className="benefit-container-des">
            <div className='headbox'>
            <h1 className='headline'>멋쟁이사자처럼 삼육대학교에서 다양한 혜택을 드려요!</h1>
        </div>

        <div className="box-par">
        <div className="row-box">
        <div className="top-ben-box">
            <div className='bene-box1-1'>
                <div className='text1-box'>
                    <p className='text'>기초 리액트,
                    <br></br> 디자인 VOD 강의 <br></br>제공</p>
                </div>
                <div className='bene-img-box'>
                    <img src={yop}></img>
                </div>
            </div>
            
            
            <div className='bene-box1-2'>
                <div className='text2-box'>
                    <p className='text'>전국 연합 해커톤<br></br>전국 아이디어톤 참여</p>
                </div>
                <div className='bene-img-box'>
                    <img src={lamp}  ></img>
                </div>
            </div>

            <div className='bene-box2'>
                <div className='text3-box'>
                    <p className='text'>현직자 온라인 특강<br></br>제공</p>
                </div>
                <div className='bene-img-box'>
                    <img src={online}></img>
                </div>
            </div>
            </div>

<div className="bottom-ben-box">
            <div className='bene-box2-1'>
            <div className='text5-box'>
                <p className='text'>타 대학과의 교류</p>
            </div>
            <div className='bene-img-box'>
                <img src={school}></img>
            </div>
            </div>
            
            <div className='bene-box1-3'>
            <div className='text6-box'>
                <p className='text'>실리콘밸리 기업 탐방<br></br><p className='sub-text'>(전체 대학 중 우수 활동자 한정)</p></p>
                </div>
            <div className='bene-img-box'>
            <img src={america}></img>
            </div>     
            </div>
           
            <div className='bene-box1-4'>
            <div className='text7-box'>
                <p className='text'>멋쟁이사자처럼 대학<br /> 수료증 발급</p>
            <div className='bene-img-box'>
            <img src={id}></img>
            
            </div>
            </div>
            </div>
            </div>
            </div>

            <div className="col-box">
            <div className='bene-box3'>
            <div className='text4-box'>
                <p className='text'>기획.디자인/ <br></br>프론트엔드 /<br></br>백엔드 트랙별 교육</p>
                </div>
            <div className='bene-img-box'>
                <img src={certification}></img>
                </div>
            
            </div>
            </div>
</div>
            
            
            </div>
        </div>
    )
};

export default BenefitLists;