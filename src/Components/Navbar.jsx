import { Link } from "react-router-dom"
import '../Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link to='/' className="title"><h2>CRUD Operation React</h2></Link>
        <ul>
            <li>
                <Link to='/create'>CreateUser</Link>
            </li>
            <li>
                <Link to='/read'>AllUsers</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar