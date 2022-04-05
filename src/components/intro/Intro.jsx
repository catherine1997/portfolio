import { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
  init(textRef.current,{
    showCursor:true,
    backDelay: 1500,
    backSpeed: 60,
    strings: ["Front-End Developer", "Designer", "Back-End Developer"],
  });

  }, []);
  return (
    <div className='intro' id='intro'>
      <div className="left">
      <div className="imgContainer">
        <img src="assets/picture.jpg" alt="" />
      </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, </h2>
          <h1>Baha Catherine Maigida</h1>
          <h3>Front-End <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/dropdown.jpg' alt='' />
        </a>
      </div>

    </div>
  )
}

export default Intro;