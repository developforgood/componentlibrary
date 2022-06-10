import './NavigationBar.css';
import { BrowserRouter as Router} from 'react-router-dom'; 

function NavigationBar({children }) {
  return (
    <Router>
    <nav>
        <ul>
            { children }
        </ul>
    </nav>  
    <p> Uses small title for navigation bar fonts and medium base for button fonts</p>
    </Router>    
  );
}
export default NavigationBar;
