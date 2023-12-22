import styled from 'styled-components';
import { useCartContext } from '../../contexts/cart';
import CartColumns from '../cart-columns';
import CartItem from '../cart-item';
import { useNavigate } from 'react-router-dom';
import CartTotals from '../cart-totals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="link-container">
        <button
          type="button"
          className="link-btn"
          onClick={() => navigate('/products')}
        >
          continue shopping
        </button>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

export default CartContent;

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.5rem 0.8rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--btn-radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
