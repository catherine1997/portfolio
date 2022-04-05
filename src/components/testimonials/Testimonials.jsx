import React from 'react'
import './testimonials.scss'

function Testimonials() {
  const data = [

    {
      id: "1",
      name: "Martin Harold",
      title: "web design",
      img: "./assets/black.jpg",
      icon: "./assets/wtm.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " ,
     
    },

    {
      id: "2",
      name: "Thomas Harold",
      title: "web design",
      img: "./assets/white.jpg",
      icon: "./assets/wtm.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit." ,
      featured: true,
    },

    {
      id: "3",
      name: "Alex Harold",
      title: "web design",
      img: "./assets/black.jpg",
      icon: "./assets/wtm.jpg",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. " ,
     
    },


   

  ];
  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/dropdown.jpg" className="left"alt="" />
            <img className = "user" src={d.img} alt="" />
            <img className = "right" src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>

        </div>
        ))}
      </div>
     
    </div>

  )
}

export default Testimonials;