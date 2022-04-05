import React, { useState } from 'react';
import './works.scss';

function Works() {
  
  const [currentSlide, setCurrentSlide] = useState([0]);
  const data = [

    {
      id: "1",
      icon: "./assets/wtm.jpg",
      title: "web design",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " ,
      img: "./assets/wtm.jpg"

    },

    {
      id: "2",
      icon: "./assets/wtm.jpg",
      title: "Designer",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit.  " ,
      img: "./assets/wtm.jpg"

    },

    {
      id: "3",
      icon: "./assets/wtm.jpg",
      title: "Front-End",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " ,
      img: "./assets/wtm.jpg"

    }, 

  ];

  const handleClick = (way) => { 
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
      {data.map((d) =>(
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=''/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                    </p>
                  <span>Projects</span>
              </div>
            </div>
            <div className="right">
            <img src="assets/bag.jpg" alt="" />

            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left"alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow2.png" className="arrow right"alt="" onClick={()=>handleClick("right")} />
    </div>
  )
}

export default Works;