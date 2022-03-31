import { Link } from 'react-router-dom';
import './Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({user}) => {
    const toggleMenu = () => {
        const sidebar = document.querySelector('.sidebar')
        sidebar.classList.toggle('show')
    }
    return (
        <div className="sidebar">
            <div className='sidebar-hamburger' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <h3 className='sidebar-user'>Welcome guest</h3>
            <ul className='sidebar-menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/ads'>Ads</Link></li>
                {user ? 
                    <button className='g-primary-btn'><Link to='/user/logout'>Log out</Link></button>:
                    <>
                        <Link to='/user/register'><button className='g-primary-btn'>Register</button></Link>
                        <Link to='/user/login'><button className='g-primary-btn'>Login</button></Link>
                    </>
                }
            </ul>
        </div>
    );
}
 
export default Sidebar;