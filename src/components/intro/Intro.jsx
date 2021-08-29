// import React from 'react'
import './intro.scss'
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef= useRef();
    useEffect(() => {
        console.log(textRef.current)
        init(textRef.current, {
          showCursor: true,
        //   backDelay: 1500,
        //   backSpeed:60,
          strings: ["Javascript", "React", "Redux", "Express", "Node", "Sequelize", "PostgresSQL", "Node.Js","HTML", "CSS"],
        });
      }, []);

   

    return (
        

        <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpeg" alt="My personal photo" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Milagros Niro</h1>
          <h3>
            FullStack Developer <span ref={textRef} ></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
        
    )
}

