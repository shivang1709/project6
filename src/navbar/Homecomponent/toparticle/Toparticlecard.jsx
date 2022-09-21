import React from "react";
import Data from "../../../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Toparticle = () => {
  const [items] = useState(Data);
  return (
    <>
      {items.map((elem) => {
        const { id, imgsrc, title,  pagename, date, homecard3 } = elem;
        return pagename === "Bollywood" && homecard3 === "home3" ? (
          <Link className="link" to={`/bollywood/${title}`}>
            <div id={id} className="top-article-main-box">
              <div className="top-artile">
                <div className="top-artile-img-box-1">
                  <img className="top-article-img1" src={imgsrc} alt="" />
                </div>
                <div className="top-artile-img-box-2">
                  <p className="top-artile-heading">{title}</p>
                  <div className="top-artile-navigation-date">
                    <span className="top-artile-navigation-1">
                      {pagename}{" "}
                    </span>{" "}
                    <span className="top-artile-navigation-2">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title,  pagename, date, homecard3 } = elem;
        return pagename === "Technology" && homecard3 === "home3" ? (
          <Link className="link" to={`/technology/${title}`}>
            <div id={id} className="top-article-main-box">
              <div className="top-artile">
                <div className="top-artile-img-box-1">
                  <img className="top-article-img1" src={imgsrc} alt="" />
                </div>
                <div className="top-artile-img-box-2">
                  <p className="top-artile-heading">{title}</p>
                  <div className="top-artile-navigation-date">
                    <span className="top-artile-navigation-1">
                      {pagename}{" "}
                    </span>{" "}
                    <span className="top-artile-navigation-2">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title,  pagename, date, homecard3 } = elem;
        return pagename === "Fitness" && homecard3 === "home3" ? (
          <Link className="link" to={`/fitness/${title}`}>
           <div id={id} className="top-article-main-box">
              <div className="top-artile">
                <div className="top-artile-img-box-1">
                  <img className="top-article-img1" src={imgsrc} alt="" />
                </div>
                <div className="top-artile-img-box-2">
                  <p className="top-artile-heading">{title}</p>
                  <div className="top-artile-navigation-date">
                    <span className="top-artile-navigation-1">
                      {pagename}{" "}
                    </span>{" "}
                    <span className="top-artile-navigation-2">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title,  pagename, date, homecard3 } = elem;
        return pagename === "Food" && homecard3 === "home3" ? (
          <Link className="link" to={`/food/${title}`}>
            <div id={id} className="top-article-main-box">
              <div className="top-artile">
                <div className="top-artile-img-box-1">
                  <img className="top-article-img1" src={imgsrc} alt="" />
                </div>
                <div className="top-artile-img-box-2">
                  <p className="top-artile-heading">{title}</p>
                  <div className="top-artile-navigation-date">
                    <span className="top-artile-navigation-1">
                      {pagename}{" "}
                    </span>{" "}
                    <span className="top-artile-navigation-2">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title,  pagename, date, homecard3 } = elem;
        return pagename === "Tourism" && homecard3 === "home3" ? (
          <Link className="link" to={`/tourism/${title}`}>
            <div id={id} className="top-article-main-box">
              <div className="top-artile">
                <div className="top-artile-img-box-1">
                  <img className="top-article-img1" src={imgsrc} alt="" />
                </div>
                <div className="top-artile-img-box-2">
                  <p className="top-artile-heading">{title}</p>
                  <div className="top-artile-navigation-date">
                    <span className="top-artile-navigation-1">
                      {pagename}{" "}
                    </span>{" "}
                    <span className="top-artile-navigation-2">
                      {date}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default Toparticle;

// import React from "react";
// const ToparticleCards = (props) => {
//   return (
//     <div className="top-article-main-box">
//       <div className="top-artile">
//         <div className="top-artile-img-box-1">
//           <img className="top-article-img1" src={imgsrc} alt="" />
//         </div>
//         <div className="top-artile-img-box-2">
//           <p className="top-artile-heading">{title}</p>
//           <div className="top-artile-navigation-date">
//             <span className="top-artile-navigation-1">{pagename} </span>{" "}
//             <span className="top-artile-navigation-2">{date}</span>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default ToparticleCards;