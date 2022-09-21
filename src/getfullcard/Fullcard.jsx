import React from "react";
import { useParams } from "react-router-dom";
import Data from "../data/Data";
//import { Link } from "react-router-dom";

const Fullcard = () => {
  const { title} = useParams();


  return (
    <div className="fullcard-container">
      <div className="fullcard-box1">
        {Data.filter((elem) => elem.title === title).map((elem, index) => {
          //const { id, imgsrc, title, about, date } = elem;
          return (
            <div key={index} className="fullcard-main-box">
              <div className="fullcard" id={elem.id}>
                <div className="fullcard-img-box-1">
                  <img
                    className="fullcard-img1"
                    src={`.${elem.imgsrc}`}
                    alt="error"
                  />
                </div>
                <div className="fullcard-img-box-2">
                  <p className="fullcard-heading">{elem.title}</p>

                  <div className="fullcard-content-box">
                    <p className="fullcard-content">{elem.about}</p>
                  </div>
                  <div className="fullcard-navigation-date">
                    <span className="fullcard-navigation-1">
                      {elem.pagename}{" "}
                    </span>
                    <span className="fullcard-navigation-2">{elem.date}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
       </div>
         {/* <div className="fullcard-box2">
        {Data.filter((elem) => elem.hello === "hello").map((elem, index) => {
      //     //const { id, imgsrc, title, about, date } = elem;
           return (
      //       <div key={index} className="-main-box">
      //         <div className="card" id={elem.id}>
      //           <div className="-img-box-1">
      //             <img
      //               className="card-img1"
      //               src={`.${elem.imgsrc}`}
      //               alt="error"
      //             />
      //           </div>
      //           <div className="img-box-2">
      //             <p className="heading">{elem.title}</p>
      //             <div className="content-box">
      //               <p className="content">{elem.about}</p>
      //             </div>
      //             <div className="navigation-date">
      //               <span className="fullcard-navigation-1">
      //                 {elem.pagename}{" "}
      //               </span>
      //               <span className="navigation-2">{elem.date}</span>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
            //-------------
            <Link className="link" to={`${elem.id}`}>
            <div id={elem.id}className="posts">
              <div className="post-img">
                <img className="img1" src={`.${elem.imgsrc}`} alt="" />
              </div>
              <p className="post-heading">{elem.title}</p>
              <div className="post-content-box">
                <p className="post-content">{elem.about}</p>
              </div>
              <div className="navigation-date">
                <span className="navigation-1">{elem.pagename} </span>{" "}
                <span className="navigation-2">{elem.date}</span>
              </div>
            </div>
          </Link>
          );
        })}
       
       
      </div>   */}
    </div> 
  );
};

export default Fullcard;