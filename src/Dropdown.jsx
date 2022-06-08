import './Dropdown.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowdropdown } from "react-icons/io";
import PropTypes from 'prop-types';

function Dropdown({title, items, hover, hoverItem}) {
  const [show, setShow] = useState("hide");
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const ref = useRef(null);
  const underlineHeight = 0;
  const style = {
    "fontSize" : process.env.TYPESCALE.smalltitle
  }
  const linkstyle = {
    "fontSize" : process.env.TYPESCALE.mediumbase
  }
  function resized() {
    if (ref != null && ref.current != null ) {
      setHeight({ top: ref.current.clientHeight+underlineHeight});
      if (!React.isValidElement(title)) {
        setWidth(ref.current.getBoundingClientRect().x-ref.current.offsetWidth+16);
      }
      else {
        setWidth(ref.current.getBoundingClientRect().x-ref.current.offsetWidth-150);
      }
    }
  
  };
  useEffect(() => {
    setHeight({ top: ref.current.clientHeight+underlineHeight});
    if (!React.isValidElement(title)) {
      setWidth(ref.current.getBoundingClientRect().x-ref.current.offsetWidth+16);
    }
    else {
      setWidth(ref.current.getBoundingClientRect().x-ref.current.offsetWidth-150);
    }
    window.addEventListener('resize', resized);
    
  }, []);

  return (
    <li class={`${hover} menu-item drop-down`} onMouseEnter={() => setShow("show")} onMouseLeave={() => setShow("hide")} ref={ref}>
      {/* <IoMdArrowdrop-down size={24}/> */}
      <button class={`drop-downhover`} style = {style}>{title}</button>
      <div class="drop-downmenu" style={{...height, ...{left: `${width}px`}}}>
        {items.map((item, index) => {
          return (
          <a class={`drop-downitem ${hoverItem} ${show}`}  key={index}>
            <Link style = {linkstyle} to="/"> {item.title} </Link>
          </a>
          );
        })}
      </div>
    </li>
  );
}
Dropdown.defaultProps = {
}
Dropdown.propTypes = {
}
export default Dropdown;
