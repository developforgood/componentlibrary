import './NavItem.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
function NavItem({align, text, hover, link}) {
  if (!link) {
    link = "/"; 
  }
  const style = {
    "fontSize" : process.env.TYPESCALE.smalltitle
  }
  return (
    
    <li class={`${align} ${hover} menu-item`}>
        <Link style = {style} to={link}> {text} </Link>
    </li>
  );
}
export default NavItem;
