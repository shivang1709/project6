import React from "react";
import Data from "../../../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Articlecard = () => {
  const [items] = useState(Data);
  return (
    <>
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard2 } = elem;
        return pagename === "Bollywood" && homecard2 === "home2" ? (
          <Link  className="link" to={`/bollywood/${title}`}>
             <div id={id} className="article-main-box">
              <hr />
              <div className="artile">
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
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard2 } = elem;
        return pagename === "Technology" && homecard2 === "home2" ? (
          <Link className="link" to={`/technology/${title}`}>
             <div id={id} className="article-main-box">
              <hr />
              <div className="artile">
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
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard2 } = elem;
        return pagename === "Fitness" && homecard2 === "home2" ? (
          <Link className="link" to={`/fitness/${title}`}>
            <div id={id} className="article-main-box">
              <hr />
              <div className="artile">
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
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard2 } = elem;
        return pagename === "Food" && homecard2 === "home2" ? (
          <Link className="link" to={`/food/${title}`}>
            <div id={id} className="article-main-box">
              <hr />
              <div className="artile">
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
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard2 } = elem;
        return pagename === "Tourism" && homecard2 === "home2" ? (
          <Link className="link" to={`/tourism/${title}`}>
            <div id={id} className="article-main-box">
              <hr />
              <div className="artile">
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
    </>
  );
};

export default Articlecard;

// import React from "react";
// import { Link } from 'react-router-dom'

// const ArticleCards = (props) => {
//   return (
//     <Link className="link" to={`/bollywood/${props.title}`}>

// <div className="article-main-box">
//   <hr />

//     <div className="artile">

//       <div className="artile-img-box-1">
//         <img className="article-img1" src={props.imgsrc} alt="" />
//       </div>
//       <div className="artile-img-box-2">
//         <p className="artile-heading">{props.title}</p>
//         <div className="artile-content-box">
//           <p className="artile-content">{props.about}</p>
//         </div>
//         <div className="artile-navigation-date">
//           <span className="artile-navigation-1">{props.pagename} </span>{" "}
//           <span className="artile-navigation-2">{props.date}</span>
//         </div>
//       </div>
//     </div>
//     </div>
//     </Link>
//   );
// };

// export default ArticleCards;