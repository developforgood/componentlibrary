import './NavItem.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
function NavItem({align, text, hover}) {
  return (
    <li class={`${align} ${hover} menu-item`}>
        <Link to="/"> {text} </Link>
    </li>
  );
}
export default NavItem;
