import PageHero from '../components/page-hero';
import styled from 'styled-components';

const Checkout = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        <h3>Checkout</h3>
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