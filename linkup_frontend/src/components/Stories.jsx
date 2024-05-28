import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../context/authContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
    {
      id: 2,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
    {
      id: 3,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
    {
      id: 4,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
    {
      id: 5,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
    {
      id: 6,
      name: "Premanand Phuke",
      image:
        "https://i.pinimg.com/1200x/b7/b6/f2/b7b6f22a83652217c1b48b3b4bb1c89b.jpg",
    },
  ];
  return (
    <div className="stories"> 
      <div className="story" >
            <img src={currentUser.profilepic}  />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
            <img src={story.image}  />
            <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
