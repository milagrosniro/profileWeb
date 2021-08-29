// import React from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'
import { useState, useEffect } from 'react'
import {featuredPortfolio, webPortfolio} from '../data'


export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
  
    const list=[
        {
            id: "featured",
            title: "Featured",
          },
          {
            id: "web",
            title: "Web App",
          }
    ]

    useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
        
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
          <h1>Portfolio</h1>
          <ul>
              {list.map(i=>(
                  <PortfolioList title={i.title} active={selected=== i.id} setSelected={setSelected} id={i.id}/>
              ))}
          </ul>
          <div className="container">
          {/* AVERIGUAR COMO COLOCAR IMAGENES EN JS SIN LINK */}
          {/* {data.map(d=>(
             <div className="item">
                  <img src={d.img}
                   alt="" />
                  <h3>{d.title}</h3>
              </div>
          ))} */}
              <div className="item">
                  <img src="assets/landing.jpeg
                  " alt="" />
                  <h3>Countries App</h3>
              </div>
              <div className="item">
                  <img src="assets/countries.jpeg
                  " alt="" />
                  <h3>Countries App</h3>
              </div>
              <div className="item">
                  <img src="assets/country.jpeg
                  " alt="" />
                  <h3>Countries App</h3>
              </div>
              <div className="item">
                  <img src="assets/form.jpeg
                  " alt="" />
                  <h3>Countries App</h3>
              </div>
          </div>
        </div>
    )
}

