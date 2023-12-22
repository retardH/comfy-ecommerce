import styled from 'styled-components';
import { SingleProduct } from '../../types';
import { FC, useState } from 'react';
import clsx from 'clsx';
import { FaCheck } from 'react-icons/fa';
import AmountButtons from '../amount-buttons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts/cart';

type AddToCartProps = {
  product: SingleProduct;
};
const AddToCart: FC<AddToCartProps> = ({
  product = { colors: [], stock: 0 },
}) => {
  const { addToCart } = useCartContext();
  const { colors, stock, id } = product;
  const [mainClr, setMainClr] = useState(colors?.[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span>colors : </span>
        <div>
          {colors?.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={clsx(
                  mainClr === color ? 'color-btn active' : 'color-btn',
                )}
                onClick={() => setMainClr(color)}
              >
                {mainClr === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => {
            addToCart(id, mainClr, amount, product);
          }}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

export default AddToCart;

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    /* width: 140px; */
  }
`;
