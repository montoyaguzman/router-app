import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div>
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item> 
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link> 
                </Nav.Item>
                <Nav.Item> 
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link> 
                </Nav.Item>
                <Nav.Item> 
                    <Nav.Link>
                        <Link to="/users">Users</Link>
                    </Nav.Link> 
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Header;