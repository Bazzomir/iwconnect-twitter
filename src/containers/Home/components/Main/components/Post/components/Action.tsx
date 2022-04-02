import React from 'react';
import styled from 'styled-components';

interface Props {
  actionNumber?: number;
  icon?: JSX.Element;
  onClick?: () => void;
}

export const Action = ({icon, actionNumber, onClick}: Props) => {
  return (
    <Styled.Container>
      <Styled.IconsWrapper>
        <Styled.Icon onClick={onClick}>{icon}</Styled.Icon>
      </Styled.IconsWrapper>
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
  IconsWrapper: styled.button`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div`
    margin-right: 10px;
  `,
  Number: styled.div`
    matgin-left: 10px;
  `,
};
