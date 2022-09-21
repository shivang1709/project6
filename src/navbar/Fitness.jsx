import React from "react";
import { useState } from "react";
import Data from "../data/Data";
import Advertistement from "./Homecomponent/advertistement/Advertistement";
import { Link } from 'react-router-dom'

const Fitness = () => {
  const [items] = useState(Data);
  return (
    <>
      <div className="main-food-page">
        {/*Hollywood */}
        <div className="the-lesest">
          <h1>Fitness</h1>
          <div className="underline-1"></div>
        </div>
        <div className="article-box">
          <div className="article-box-1">
            {items.map((elem) => {
              const { id, imgsrc, title, about, pagename, date } = elem;
              return pagename === "Fitness" ? (
                <Link className="link" to={`/fitness/${title}`}>
                <div className="article-main-box">
                  <hr />

                  <div className="artile" id={id}>
                    <div className="artile-img-box-1">
                      <img className="article-img1" src={imgsrc} alt="" />
                    </div>
                    <div className="artile-img-box-2">
                      <p className="artile-heading">{title}</p>
                      <div className="artile-content-box">
                        <p className="artile-content">{about}</p>
                      </div>
                      <div className="artile-navigation-date">
                        <span className="artile-navigation-1">{pagename} </span>{" "}
                        <span className="artile-navigation-2">{date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              ) : null;
            })}
          </div>

          {/* top  Article */}
          <div className="article-box-2">
            <div className="top-the-lesest">
              <h1>Top Article</h1>
              <div className="top-underline-1"></div>
            </div>
            {items.map((elem) => {
              const { id, imgsrc, title,  pagename, date,toparticle  } =
                elem;
              return pagename === "Fitness"&& toparticle==="topfitness" ? (
                <Link className="link" to={`/fitness/${title}`}>
                <div className="top-article-main-box" id={id} >
                  <div className="top-artile">
                    <div className="top-artile-img-box-1">
                      <img className="top-article-img1" src={imgsrc} alt="" />
                    </div>
                    <div className="top-artile-img-box-2">
                      <p className="top-artile-heading">{title}</p>
                      <div className="top-artile-navigation-date">
                        <span className="top-artile-navigation-1">
                          {pagename}
                        </span>
                        <span className="top-artile-navigation-2">{date}</span>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                </Link>
              ) : null;
            })}
            <Advertistement />
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Fitness