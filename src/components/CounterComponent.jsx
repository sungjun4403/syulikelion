import React, { useEffect, useRef } from 'react';
import SlotCounter from 'react-slot-counter';
import './CounterComponent.css';

const CounterComponent = () => {
  const slotCounterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (slotCounterRef.current) {
      observer.observe(slotCounterRef.current);
    }

    return () => {
      if (slotCounterRef.current) {
        observer.unobserve(slotCounterRef.current);
      }
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Entry is in the viewport, start the slot counter
        if (slotCounterRef.current && slotCounterRef.current.start) {
          slotCounterRef.current.start();
        }
      }
    });
  };

  return (
    <div className="maincontent">
      <p className='intro'>
        <span className='i-box'>
          <p className='i-text'>국내 최대 규모 IT 창업 동아리 <span className='i-textBr'>멋쟁이사자처럼</span></p>
        </span>
      </p>
      <div className="count-box">
        <span className='y-box'>
          <p className='intro-text'>시작된지 <p className='bar1'></p><p className='num'><SlotCounter value="11년" animateOnVisible={{triggerOnce:false}} duration={0.5}/></p></p>
        </span>
        {<span className='s-box'>
          <p className='intro-text2'> 멋사 대학 출신 학생 수 <p className='bar2'></p> <p className='num'><SlotCounter value="10,000+" animateOnVisible={{triggerOnce:false}} duration={0.5}/></p></p>
         </span> }
         <span className='u-box'>
           <p className='intro-text3'>2024 함께하는 대학 수  <p className='bar3'></p> <p className='num'><SlotCounter value="58" animateOnVisible={{triggerOnce:false}} duration={0.5} /></p></p>
         </span>  
       </div>
    </div>
  );
};

export default CounterComponent;
