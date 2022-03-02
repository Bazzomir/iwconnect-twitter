import React from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button/Button';

export const Navbar = () => {
  return (
    <Styled.Container className="col-3">
      <Button backgraundColor="lightblue" name="Tweet"></Button>
    </Styled.Container>
  );
};

// const Container = styled.nav`
//   background: cyan;
//   height: 100vh;
// `;

const Styled = {
  Container: styled.nav`
    background: cyan;
    height: 100vh;
  `,
};
