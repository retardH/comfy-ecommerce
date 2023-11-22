import styled from 'styled-components';
import { clsx } from 'clsx';
import { FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { links } from '../../utils/constants.ts';
import { Link } from 'react-router-dom';
import CartButtons from '../cart-buttons';
import { useUserContext } from '../../contexts/user.tsx';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUserContext();
  return (
    <SidebarContainer>
      <aside className={clsx(isSidebarOpen && 'show-sidebar', 'sidebar')}>
        <div className="sidebar-header">
          <img src={logo} alt="comfy sloth" />
          <button
            type="button"
            className="close-btn"
            onClick={() => toggleSidebar('close')}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url} onClick={() => toggleSidebar('close')}>
                {link.text}
              </Link>
            </li>
          ))}
          {/*Need to render conditionally based on user exists or not*/}
          <li>
            <Link to="/checkout" onClick={() => toggleSidebar('close')}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem 1rem 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;