import './sroute.css';
import kakaoIcon from "./img/kakao icon.png";
import instaIcon from "./img/insta icon.png";
import { Link } from "react-router-dom";

function sroute() {
  return (
    <div className="sroute-container">
      <div className="s-recruit">
        <Link to="/recruit/intro">
        <p className='sr-text'>삼육멋사 12기 지원하기</p>
        </Link>
      </div>
      <div className="kakao">
        <img src={kakaoIcon} alt="Kakao Icon" />
        <a href="http://pf.kakao.com/_DfxbkK" className='social-text'>
          카카오톡 채널 멋쟁이사자처럼 삼육대학교
        </a>
      </div>
      <div className="insta">
        <img src={instaIcon} alt="Instagram Icon" />
        <a href="https://www.instagram.com/likelion_syu/" className='social-text2'>
          인스타그램 멋쟁이사자처럼 at 삼육대학교
        </a>
      </div>
    </div>
  );
}

export default sroute;
