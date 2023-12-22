import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../contexts/products';
import PageHero from '../components/page-hero';
import { useEffect } from 'react';
import { single_product_url } from '../utils/constants';
import Error from '../components/error';
import { formatPrice } from '../utils/helper';
import ProductImages from '../components/product-images';
import Stars from '../components/stars';
import AddToCart from '../components/add-to-cart';
import Loading from '../components/loading';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    singleProduct: product,
    singleProductLoading: isLoading,
    singleProductError: isError,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [isError, navigate]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  const {
    id: sku,
    images,
    description,
    company,
    stars,
    stock,
    name,
    price,
    reviews,
  } = product;
  return (
    <Wrapper>
      <PageHero title={product.name} />
      <div className="section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock <= 0 ? 'Out of stock' : 'in stock'}
            </p>
            <p className="info">
              <span>SKU : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
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
