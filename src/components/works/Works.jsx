import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "About Me",
      desc:
        "I'm a 27 years old Full-Stack Developer. I learn in soyHenry's Bootcamp, You can see all of me in my Linkedin www.linkedin.com/in/maría-milagros-niro-dev",
      img:
        "https://i.postimg.cc/8c7MP3pq/coding-web-development-code-computer-laptop-woman-workspace-pet-md.png"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "SOFT SKILLS",
      desc:
        "TeamWork, Empathy, Communication, Open-mindedness, Problem Solving, Time management",
      img:
        "https://i.postimg.cc/sgd7swtN/people.jpg",
    },
    // {
    //   id: "3",
    //   icon: "./assets/writing.png",
    //   title: "Branding",
    //   desc:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //   img:
    //     "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
                <img src={d.img}
            
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}

