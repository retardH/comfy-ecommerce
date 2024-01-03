import styled from 'styled-components';
import PageHero from '../components/page-hero';
import aboutImg from '../assets/hero-bcg.jpeg';

const About = () => {
  return (
    <main>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="about page img" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              Welcome to ComfyHome, your go-to destination for exquisite
              furniture that seamlessly combines aesthetics, functionality, and
              affordability. Our mission is to make the process of transforming
              your living spaces enjoyable and convenient. Whether you're
              seeking modern minimalism, classic elegance, or eclectic charm,
              our thoughtfully selected collection offers something for every
              discerning taste. With a user-friendly online platform, we aim to
              simplify your shopping experience, providing detailed product
              information and expert guidance to help you make informed
              decisions. Join us at ComfyHome on this exciting journey of
              turning houses into homes, where comfort, style, and affordability
              come together seamlessly.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

export default About;

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 2rem auto 0 auto;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
