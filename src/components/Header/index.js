import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="unorderedListContainer">
    <li className="listItem">
      <Link to="/">Home</Link>
    </li>
    <li className="listItem">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
