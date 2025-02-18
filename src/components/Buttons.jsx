import './Hero.css';
import {Link} from 'react-router-dom';

function Buttons({btn}) {
  return (
    <Link to='/about'><button>{btn}</button></Link>
  )
}

export default Buttons