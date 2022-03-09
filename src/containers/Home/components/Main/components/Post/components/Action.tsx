import React from 'react';
import styled from 'styled-components';

interface Props {
  actionNumber: number;
  icon?: JSX.Element;
}

export const Action = ({icon, actionNumber}: Props) => {
  return (
    <Styled.Container>
      <Styled.Icon>{icon}</Styled.Icon>
      <Styled.Number>{actionNumber}</Styled.Number>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    color: white;
  `,
  Icon: styled.div``,
  Number: styled.div`
    matgin-left: 10px;
  `,
};
