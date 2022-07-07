import React from 'react';
import {Styled} from '../Messages/Messages';
import {useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div
      className="col-12"
      style={{marginTop: '250px', justifyContent: 'center', textAlign: 'center'}}
    >
      <Styled.TextWrapper>This page doesn't exist!</Styled.TextWrapper>
      <Button
        onClick={() => goBack()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '30px',
          fontWeight: 'bold',
          height: '55px',
          color: 'white',
          backgroundColor: 'rgba(29,155,240,255)',
        }}
      >
        Go Back
      </Button>
    </div>
  );
};
