import './NavGroup.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
function NavGroup({align, hover, children}) {
  return (
    <div class={`${align} ${hover} menu-item-nav`}>
      {children}
    </div>
  );
}
export default NavGroup;
