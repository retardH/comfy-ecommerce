import styled from 'styled-components';
import { useProductsContext } from '../../contexts/products.tsx';
import Product from '../product';

const FeaturedProducts = () => {
  const { featuredProducts, productsLoading, productsError } =
    useProductsContext();

  if (productsLoading) {
    return (
      <div className="section section-center">
        <div className="loading"></div>
      </div>
    );
  }

  if (productsError) {
    return (
      <div className="section section-center text-center">
        <h2>There was an error...</h2>
      </div>
    );
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProducts;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;