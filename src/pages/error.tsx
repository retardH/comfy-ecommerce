import errorImg from '../assets/404.png';
import styled from 'styled-components';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <ErrorWrapper className="page-100 section section-center text-center">
      <img src={errorImg} alt="404" />
      <h3>There was an error</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.section`
  img {
    width: 500px;
  }
`;

export default Error;
