import React, { useState }from "react";
import "../sass/main.scss";


const Postips = ({ number, title, content, subContent, link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={isActive ? 'postips postips__active' : 'postips'} id="{number}">
      <div className="postips__header" onClick={() => setIsActive(!isActive)}>
        <div class="content">{number}.</div>
        <div class="symbole">{isActive ? '-' : '+'}</div>
      </div>
      <h2 className="postips__title">{title}</h2>
      {isActive && <div className="postips__wrapper">
      {isActive && <div className="postips__content content">{content}</div>}
      {isActive && <div className="postips__sub-content">{subContent}</div>}
      {isActive && <a className="postips__button button" href="{link}">En savoir plus</a>}
      </div>}
    </div>
  );    
};

export default Postips