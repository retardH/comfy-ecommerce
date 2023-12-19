import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';

type PageHeroProps = {
  title?: string;
};
const PageHero: FC<PageHeroProps> = ({ title }) => {
  const { pathname } = useLocation();
  const isProductsIncluded = pathname.includes('products');
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {isProductsIncluded && <Link to="/products">/ Products</Link>}/{' '}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};

export default PageHero;

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;
