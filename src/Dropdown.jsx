import './Dropdown.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import PropTypes from 'prop-types';

function Dropdown({title, items, hover, hoverItem}) {
  const [show, setShow] = useState("hide");
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const ref = useRef(null);
  const underlineHeight = 3
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
    <li className={`${hover} menu-item dropdown`} onMouseEnter={() => { console.log("test"); setShow("show"); } } onMouseLeave={() => setShow("hide")} ref={ref}>
      {/* <IoMdArrowDropdown size={24}/> */}
      <button class={`dropdown-hover`}>{title}</button>
      <div className="dropdown-menu" style={{...height, ...{left: `${width}px`}}}>
        {items.map((item, index) => {
          return (
          <a className={`dropdown-item ${hoverItem} ${show}`} key={index}>
            <Link to="/"> {item.title} </Link>
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