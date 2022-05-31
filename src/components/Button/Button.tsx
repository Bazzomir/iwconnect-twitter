import React, {useState} from 'react';

interface Props {
  nameButton?: string;
  onClick?: () => void;
}

export const Button = ({nameButton}: Props) => {
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

export const LightButton = ({nameButton}: Props) => {
  const [clicked, setCliced] = useState<number>(0);
  const onClick = (event: any) => {
    console.log(`${nameButton} btn-light clicked`, clicked);
    setCliced(prevState => {
      return prevState + 1;
    });
  };
  return (
    <div
      className="btn btn-light"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid lightgrey',
      }}
    >
      {nameButton}
    </div>
  );
};

export const PostButton = ({nameButton, onClick}: Props) => {
  return (
    <div
      className="btn col-3"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'rgba(29,155,240,255)',
      }}
    >
      {nameButton}
    </div>
  );
};

export const EditButton = ({nameButton}: Props) => {
  return (
    <div
      className="btn btn-outline-secondary"
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        height: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginLeft: '50%',
      }}
    >
      {nameButton}
    </div>
  );
};
