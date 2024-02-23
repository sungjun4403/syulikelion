import calen from "../img/calen.png";
import calen2 from "../img/calen2.png"
import c1 from "../img/c1.png"
import c2 from "../img/c2.png"
import c3 from "../img/c3.png"
import c4 from "../img/c4.png"
import './cal.css'

function cal(){
    return( 
        <div className='cal-container'>
   <div className="cal-mo1">
            <div className="cal-head1">
                <h1 className="cal-text1">
            멋쟁이사자처럼 삼육대학교 <span />12기 모집일정
            </h1>
            </div>
            </div>

        <div className='cal-box'> 
        <img src={calen}></img>
        </div>

     
        <div className="cal-mo">
            <div className="cal-head">
                <h1 className="cal-text">
            멋쟁이사자처럼  삼육대학교<br></br>
            12기 모집일정
            </h1>
            </div>
        <div className='cal2-box'> 
        <img src={calen2}></img>
        </div>

        <div className="mo-calen">
        <div className="c3">
        <img src={c3}></img><br></br>
        </div>
        <div className="c2">
        <img src={c2}></img><br></br>
        </div>
        <div className="c1">
        <img src={c1}></img><br></br>
        </div>
        <div className="c4">
        <img src={c4}></img><br></br>
        </div>
        </div>

        </div>
        </div>

    )
};

export default cal;