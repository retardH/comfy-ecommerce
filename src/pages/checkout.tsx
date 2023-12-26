import PageHero from '../components/page-hero';
import styled from 'styled-components';
import { useCartContext } from '../contexts/cart';
import StripeCheckout from '../components/stripe-checkout';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

export default Checkout;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
