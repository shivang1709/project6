import React from "react";
import Data from "../../../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Storycard = () => {
  const [items] = useState(Data);
  return (
    <>
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Bollywood" && homecard4 === "home4" ? (
          <Link className="link" to={`/bollywood/${title}`}>
            <div id={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Technology" && homecard4 === "home4" ? (
          <Link className="link" to={`/technology/${title}`}>
            <div id={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Fitness" && homecard4 === "home4" ? (
          <Link className="link" to={`/fitness/${title}`}>
            <div id={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Food" && homecard4 === "home4" ? (
          <Link className="link" to={`/food/${title}`}>
            <div id={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard4 } = elem;
        return pagename === "Tourism" && homecard4 === "home4" ? (
          <Link className="link" to={`/tourism/${title}`}>
            <div id={id} className="top-story">
              <div className="top-story-img">
                <img className="top-story-img1" src={imgsrc} alt="" />
              </div>
              <p className="top-story-heading">{title}</p>
              <div className="top-story-content-box">
                <p className="top-story-content">{about}</p>
              </div>
              <div className="top-story-navigation-date">
                <span className="top-story-navigation-1">
                  {pagename}{" "}
                </span>
                <span className="top-story-navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default Storycard;

// import React from "react";

// const Storycard = (props) => {
//   return (
//     <>
//       <div className="top-story">
//         <div className="top-story-img">
//           <img className="top-story-img1" src={imgsrc} alt="" />
//         </div>
//         <p className="top-story-heading">{title}</p>
//         <div className="top-story-content-box">
//           <p className="top-story-content">{about}</p>
//         </div>
//         <div className="top-story-navigation-date">
//           <span className="top-story-navigation-1">{pagename} </span>{" "}
//           <span className="top-story-navigation-2">{date}</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Storycard;