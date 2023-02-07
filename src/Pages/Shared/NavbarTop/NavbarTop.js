import { Link } from "react-router-dom";
import "./NavbarTop.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarTop = () => {
    return (
        <Navbar id="header" expand="lg">
            <Container>
                <Navbar.Brand id='brand' href="/">Cryp<span className='tod'>Tod</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 font-weight-bold nav-items"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/all-cryptocurrency">All Cryptocurrencies</Nav.Link>
                        <Nav.Link as={Link} to="/">Featured</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/" className="btn btn-primary text-white">Connect Wallet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarTop;