import React from 'react';
import styled from 'styled-components';

interface Props {
  actionNumber?: number;
  icon?: JSX.Element;
  onClick?: () => void;
  show?: () => void;
}

export const Action = ({icon, actionNumber, onClick, show}: Props) => {
  return (
    <Styled.Container>
      <Styled.IconsWrapper>
        <Styled.Icon
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {icon}
        </Styled.Icon>
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
  IconsWrapper: styled.span`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div`
    margin-right: 10px;
  `,
  Number: styled.div`
    margin-left: 10px;
  `,
};
