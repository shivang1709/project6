import React from "react";
import Data from "../../data/Data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [items] = useState(Data);
  return (
    <>
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Bollywood" && homecard1 === "home1" ? (
          <Link className="link" to={`/bollywood/${title}`}>
            <div id={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{pagename} </span>
                <span className="navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Technology" && homecard1 === "home1" ? (
          <Link className="link" to={`/technology/${title}`}>
            <div id={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{pagename} </span>{" "}
                <span className="navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Fitness" && homecard1 === "home1" ? (
          <Link className="link" to={`/fitness/${title}`}>
            <div id={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{pagename} </span>{" "}
                <span className="navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Food" && homecard1 === "home1" ? (
          <Link className="link" to={`/food/${title}`}>
            <div id={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{pagename} </span>{" "}
                <span className="navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
      {items.map((elem) => {
        const { id, imgsrc, title, about, pagename, date, homecard1 } = elem;
        return pagename === "Tourism" && homecard1 === "home1" ? (
          <Link className="link" to={`/tourism/${title}`}>
            <div id={id} className="posts">
              <div className="post-img">
                <img className="img1" src={imgsrc} alt="" />
              </div>
              <p className="post-heading">{title}</p>
              <div className="post-content-box">
                <p className="post-content">{about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{pagename} </span>{" "}
                <span className="navigation-2">{date}</span>
              </div>
            </div>
          </Link>
        ) : null;
      })}
    </>
  );
};

export default Posts;

// import React from 'react';

// import { Link } from 'react-router-dom';

// const Posts = (props) => {
//   return (
//     <>

//     {/* <Link className="link" to={`/bollywood/${props.title}`}>

//     <div className="posts">
//         <div className="post-img">
//             <img className='img1' src={props.imgsrc} alt="" />
//         </div>
//         <p className="post-heading">{props.title}</p>
//         <div className="post-content-box">

//         <p className="post-content">
//            {props.about}
//         </p>
//         </div>
//         <div className="navigation-date">
//             <span className='navigation-1'>{props.pagename} </span> <span className='navigation-2'>{props.date}</span>
//         </div>
//     </div>
//     </Link>
//      */}
//     </>
//   )
// }

// export default Posts