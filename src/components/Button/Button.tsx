import React, { useState } from 'react';

interface Props {
  nameButton?: string;
  onClick?: () => void;
  type?: React.HTMLProps<HTMLButtonElement>['type'];
  isOpen?: boolean;
}

export const Button = ({ nameButton }: Props) => {
  const [clicked, setCliced] = useState<number>(0);
  const onClick = (event: any) => {
    console.log(` ${nameButton} btn-primary clicked`, clicked);
    setCliced(prevState => {
      return prevState + 1;
    });
  };

  return (
    <div
      className="btn btn-xs col-12"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '55px',
        backgroundColor: 'rgba(29,155,240,255)',
        color: 'white',
        padding: '12px 0',
      }}
    >
      {nameButton}
    </div>
  );
};

export const LightButton = ({ nameButton }: Props) => {
  const [clicked, setCliced] = useState<number>(0);
  const onClick = (event: any) => {
    console.log(`${nameButton} btn-light clicked`, clicked);
    setCliced(prevState => {
      return prevState + 1;
    });
  };
  return (
    <div
      className="btn btn-light d-flex justify-content-center align-items-center w-100"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        border: '1px solid lightgrey',
      }}
    >
      {nameButton}
    </div>
  );
};

export const PostButton = ({
  nameButton,
  onClick,
  type,
  ...rest
}: React.HTMLProps<HTMLButtonElement> & Props) => {
  return (
    <button
      {...rest}
      // @ts-ignore
      type={type}
      className="btn col-3 d-flex justify-content-center align-items-center"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '40px',
        color: 'white',
        backgroundColor: 'rgba(29,155,240,255)',
      }}
    >
      {nameButton}
    </button>
  );
};

export const ReplyButton = ({ nameButton, onClick }: Props) => {
  return (
    <button
      className="col-2 d-flex justify-content-center align-items-center"
      onClick={onClick}
      style={{
        float: 'right',
        marginTop: '25px',
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '50px',
        color: 'white',
        backgroundColor: 'rgba(29,155,240,255)',
      }}
    >
      {nameButton}
    </button>
  );
};

export const EditButton = ({ nameButton }: Props) => {
  return (
    <div
      className="btn btn-outline-secondary d-flex justify-content-center align-items-center"
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '40px',
        color: 'white',
        marginLeft: '50%',
      }}
    >
      {nameButton}
    </div>
  );
};

export const AuthButton = ({ nameButton, onClick }: Props) => {
  return (
    <button
      className="d-flex justify-content-center align-items-center border-0 w-100"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '38px',
        color: 'white',
        backgroundColor: 'rgba(29,155,240,255)',
        overflow: 'hidden'
      }}
    >
      {nameButton}
    </button>
  );
};

export const MobileMenuButton = ({ isOpen, onClick }: Props) => {
  return (
    <button
      className="mobile-menu-btn"
      onClick={onClick}
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '50%',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: 'rgba(29,155,240,255)',
        color: 'white',
        position: 'fixed',
        top: '15px',
        left: '15px',
        zIndex: 1101,
        cursor: 'pointer',
      }}
    >
      {isOpen ? '✕' : '☰'}
    </button>
  );
};
