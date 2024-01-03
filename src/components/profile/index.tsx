import styled from 'styled-components';
import { useUserContext } from '../../contexts/user';
import { useState } from 'react';
import clsx from 'clsx';
import { useCartContext } from '../../contexts/cart';

const Profile = () => {
  const { user, logout } = useUserContext();
  const { clearCart } = useCartContext();
  const [show, setShow] = useState(false);
  return (
    <Wrapper>
      <img
        src={user.picture}
        width={35}
        height={35}
        onClick={() => setShow(!show)}
      />
      <div className={clsx('profile-dropdown', show && 'show')}>
        <span className="user-email">{user.email}</span>
        <hr />
        <button
          className="btn"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;

  img {
    border-radius: 50%;
  }
  .profile-dropdown {
    position: absolute;
    top: 110%;
    left: -150%;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    background-color: white;
    box-shadow: var(--light-shadow);
    border-radius: var(--radius);
    padding: 10px 12px;
    gap: 12px;
    cursor: auto;

    hr {
      border-top: 1px solid var(--clr-grey-6);
      width: 100%;
    }
  }

  .show {
    opacity: 1;
    pointer-events: all;
    z-index: 99999;
  }

  .btn {
    width: 100%;
    padding: 0.3rem 1.4rem;
  }

  @media (max-width: 992px) {
    .profile-dropdown {
      left: -210%;
    }
  }

  @media (max-width: 370px) {
    .profile-dropdown {
      left: -240%;
    }
  }
`;
