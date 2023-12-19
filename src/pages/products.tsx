import styled from 'styled-components';
import PageHero from '../components/page-hero';
import Filters from '../components/filters';
import Sort from '../components/sort';
import ProductList from '../components/product-list';

const Products = () => {
  return (
    <main>
      <PageHero />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default Products;

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
