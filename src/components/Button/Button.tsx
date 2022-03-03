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
      className="btn btn-primary col-12"
      onClick={onClick}
      style={{
        borderRadius: '30px',
        fontWeight: 'bold',
        padding: '10px 30px',
      }}
    >
      {nameButton}
    </div>
  );
};
