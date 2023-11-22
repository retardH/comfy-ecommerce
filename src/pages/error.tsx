import errorImg from '../assets/404.png';
import styled from 'styled-components';
const Error = () => {
  return (
    <ErrorWrapper className="section section-center text-center">
      <img src={errorImg} alt="404" />
      <h2>There was an error</h2>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.section`
  img {
    width: 500px;
  }
`;

export default Error;