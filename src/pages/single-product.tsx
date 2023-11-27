import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../contexts/products';
import PageHero from '../components/page-hero';
import { useEffect } from 'react';
import { single_product_url } from '../utils/constants';
// import ProductImages from '../components/product-images';

const SingleProduct = () => {
  const { id } = useParams();
  const {
    singleProduct: product,
    singleProductLoading: isLoading,
    singleProductError: isError,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id, fetchSingleProduct]);

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  return (
    <Wrapper>
      <PageHero title={product.name} />
      <div className="section section-center">
        Single Product
        {/* <div className="product-center">
          <ProductImages images={product.images} />
          <section className="content">
            <h2>Name: {product.name}</h2>
          </section>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
