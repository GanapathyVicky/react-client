import React,{useRef,useEffect,useContext} from 'react';
import { Container,Row,Button} from 'reactstrap'
import { NavLink,Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext'
const nav__links=[
  {
    path:"/home",
    display:"HOME"
  },
  {
    path:"#",
    display:"ABOUT"
  },
  {
    path:"/Tour",
    display:"TOUR"
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const {user, dispatch}=useContext(AuthContext)

  const logout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }
  return <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <img src={logo} alt=""/>
            </div>
          
            <div className='navigation'>
              <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item,index)=>(
                  <li className='nav__item' key={index}>
                      <NavLink 
                        to={item.path} 
                        className={navClass=>
                          navClass.isActive?"active__link":""
                        }
                      >
                        {item.display}
                      </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                {
                  user?<>
                  <h5 className="mb-0">{user.username}</h5>
                  <Button className="btn btn-dark" onClick={logout}>Logout
                  </Button>
                  </>:<>
                  <Button className='btn secondary__btn'>
                    <Link to='/Login'>Login</Link>
                  </Button>
                  <Button className='btn primary__btn'>
                    <Link to='/Register'>Register</Link>
                  </Button>
                  </>
                }
                
              </div>

              <span className="mobile__menu">
                <i class="ri-menu-fold-line"></i>
              </span>

            </div>
          </div>
        </Row>
      </Container>
    </header>
  
};

export default Header
