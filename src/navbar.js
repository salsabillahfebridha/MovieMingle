import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Picture/logo.png'
import PropTypes from 'prop-types';

const NavbarExample = ({ onPageChange, onSearch }) => {
  const handleNavItemClick = (page) => {
    onPageChange(page);
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={Logo}
            alt="Logo"
            width="53"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link onClick={() => handleNavItemClick('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('top-rated')}>Top Rated</Nav.Link>
            <Nav.Link onClick={() => handleNavItemClick('now-playing')}>Now Playing</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={({target}) => onSearch(target.value)}
            />
            <Button variant="outline-success" onClick={() => onSearch()}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarExample.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default NavbarExample;