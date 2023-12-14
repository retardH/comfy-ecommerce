import { FC } from 'react';
import styled from 'styled-components';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

type StarsProps = {
  stars: number;
  reviews: number;
};
const Stars: FC<StarsProps> = ({ stars, reviews }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => {
    const number = index + 1;
    return (
      <span key={index}>
        {stars > number ? (
          <BsStarFill />
        ) : stars > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className="stars">{starIcons}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`;
