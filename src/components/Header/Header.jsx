import { useState } from 'react'
import { Navbar, Nav, Container, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import useDarkMode from '../../hooks/useDarkMode'
import LoginModal from '../LoginModal/LoginModal';
import axios from 'axios';
import './Header.scss'


const Header = props => {
  const [theme, toggleTheme] = useDarkMode();
  const [loginModal, setLoginModal] = useState(false);
  const navigate = useNavigate()
  const navigateDashboard = () => navigate('/dashboard');
  const accountExist = JSON.parse(localStorage.getItem('accountExist'));
  



    return (
      <>
      <LoginModal show={loginModal} handleClose={() => setLoginModal(false)} />
        <Navbar bg={theme ? 'dark' : 'light'} variant={theme ? 'dark' : 'light'} className='main-header'>
        <Container>
            <LinkContainer to='/'>
          <Navbar.Brand>
              <img src='/assets/imgs/logo.png' className='w-25' />
          </Navbar.Brand>
            </LinkContainer>
            <Nav className="d-none d-md-block header-center">
              <div className='d-flex'>
                <LinkContainer to="/lessons">
                <Nav.Link className='header-center__link'><i className='fa fa-tv'></i>Lessons</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/courses">
                <Nav.Link className='header-center__link'><i className="fa fa-suitcase"></i>Courses</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/tags">
                <Nav.Link className='header-center__link'><i className="fa fa-tags"></i>Tags</Nav.Link>
                </LinkContainer>
              </div>
            </Nav>
            <Nav>
              <OverlayTrigger
                     placement="bottom"
                     overlay={<Tooltip>Search!</Tooltip>}>
              <Nav.Link className='header-right__link'><i className='fa fa-search'></i></Nav.Link>
              </OverlayTrigger>
              <OverlayTrigger
                     placement="bottom"
                     overlay={<Tooltip>Pro!</Tooltip>}>
                <LinkContainer to='/license'><Nav.Link className='header-right__link'><i className='fa fa-rocket'></i></Nav.Link></LinkContainer>
              </OverlayTrigger>
              <Nav.Link className='header-right__link'><i className="fa fa-eye" onClick={() => toggleTheme()}></i></Nav.Link>
              {accountExist == null ? (
                <Nav.Link className='header-right__link'><i className="fa fa-user" onClick={() => setLoginModal(true)}></i></Nav.Link>
                ) : (
                <Nav.Link className='header-right__link'><i className="fa fa-user-circle" onClick={() => navigateDashboard()}></i></Nav.Link>
              )}
            </Nav>
        </Container>
      </Navbar>
      </>
  
    )
}

export default Header