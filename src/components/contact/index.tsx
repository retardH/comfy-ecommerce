import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
    border-top: 1px solid var(--clr-black);
    border-bottom: 1px solid var(--clr-black);
    border-radius: var(--btn-radius);
    background-color: var(--clr-primary-10);
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.65rem 1rem;
    border: 1px solid var(--clr-black);
    border-top: none;
    border-bottom: none;
  }
  .form-input {
    color: var(--clr-grey-3);
    border-top-left-radius: var(--btn-radius);
    border-bottom-left-radius: var(--btn-radius);
    border-right: none;
    background-color: inherit;
  }
  .form-input:focus {
    border: 1px solid var(--clr-black);
    border-top: none;
    border-bottom: none;
    border-right: none;
    outline: none;
  }
  .submit-btn {
    //border-top-right-radius: var(--btn-radius);
    border-radius: var(--btn-radius);
    border-left: none;
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 20rem 0 15rem 0;
  }
`;