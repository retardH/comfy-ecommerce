import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useUserContext } from '../../contexts/user.tsx';
// import { FaUserLarge } from 'react-icons/fa6';

const CartButtons = () => {
  const { toggleSidebar } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link
        to="/cart"
        className="cart-btn"
        onClick={() => toggleSidebar('close')}
      >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button
        type="button"
        className="auth-btn"
        onClick={() => toggleSidebar('close')}
      >
        Login
        {/*<FaUserLarge />*/}
      </button>
    </Wrapper>
  );
};

export default CartButtons;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.2rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    font-family: inherit;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
