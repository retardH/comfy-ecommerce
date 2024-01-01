import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links } from '../../utils/constants.tsx';
import CartButtons from '../cart-buttons';
import { useUserContext } from '../../contexts/user.tsx';
import Logo from '../logo/index.tsx';
const Navbar = () => {
  const { toggleSidebar, user } = useUserContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => toggleSidebar('open')}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons isNavbar />
      </div>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      font-size: 1.8rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-header {
      flex-direction: row;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
    }
  }
`;
