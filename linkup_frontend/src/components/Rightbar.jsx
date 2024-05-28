import React, { useContext, useState } from "react";
import "./rightbar.scss";
import { RightbarContext } from "../context/rightbarContext";


function Rightbar() {

  return (
    <>
      <div className="rightbar">
        <div className="container">
          <div className="item">
            <span>Suggestions For You</span>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <span>Premanand Phuke</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <span>Premanand Phuke</span>
              </div>
              <div className="buttons">
                <button>Follow</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>

          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <p>
                  <span>Premanand Phuke </span>Changed their profile picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <p>
                  <span>Premanand Phuke </span>Changed their profile picture
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          </div>

          <div className="item">
            <span>Online Friends</span>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
            <div className="user">
              <div className="userinfo">
                <img
                  src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
                  alt=""
                />
                <div className="online" />
                <span>Premanand Phuke </span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Rightbar;
