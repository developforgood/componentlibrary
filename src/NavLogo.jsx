import './NavLogo.css';
import PropTypes from 'prop-types';

function NavLogo({logo}) {
  return (
    <li class="nav-logo">
        <a href="/"><img src={logo}></img></a>
    </li>
  );
}
export default NavLogo;
