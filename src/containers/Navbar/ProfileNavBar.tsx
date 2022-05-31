import React from 'react';
import styled from 'styled-components';

export const ProfileNavBar = () => {
  return (
    <div className="row" style={{position: 'fixed', bottom: '5px'}}>
      <img
        className="col-3"
        src="https://i.pravatar.cc/100"
        style={{width: '150px', height: '50px', borderRadius: '50%'}}
        alt=" "
      />
      <div className="col-9">
        <Styled.TextWhite>John Doe</Styled.TextWhite>
        <Styled.TextGrey>@JohnDoe</Styled.TextGrey>
      </div>
    </div>
  );
};

const Styled = {
  TextGrey: styled.p`
    color: grey;
    font-size: 15px;
    margin: 0;
  `,
  TextWhite: styled.p`
    color: ${props => props.theme.RightSide.wrapperTwo.accountName.color};
    font-size: 22px;
    height: 20px;
    margin-bottom: 9px;
  `,
};
