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
    </Router>    
  );
}
export default NavigationBar;
