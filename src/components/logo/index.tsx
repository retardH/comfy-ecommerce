import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate('/')}>
      Comfy<span>Home</span>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  letter-spacing: 0.8px;
  color: var(--clr-grey-1);
  position: relative;
  &::after {
    content: '';
    width: 110%;
    height: 40px;
    transform: skewX(5deg) translate(-50%, -50%);
    background-color: var(--clr-primary-8);
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
  }
  span {
    color: var(--clr-primary-1);
    letter-spacing: 0.8px;
  }
  @media (max-width: 992px) {
    font-size: 1.4rem;

    &::after {
      height: 30px;
    }
  }
`;
