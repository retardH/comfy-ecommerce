import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <span>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth</span>
      </span>
      <span>All rights reserved</span>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  > span {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;