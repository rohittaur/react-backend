import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        // <ul className="nav">
        //     <li className="nav-item"><Link to="/create">Create</Link></li>
        //     <li className="nav-item"><Link to="/">List</Link></li>
        // </ul>
          <Nav
          activeKey="/create"
          variant="pills"
        >
          <Nav.Item>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" eventKey="link-1">List</Nav.Link>
          </Nav.Item>

        </Nav>
    )
}

export default Header