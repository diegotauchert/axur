import {ReactNode} from 'react';

type IPropType = {
  type: 'submit' | 'button' | 'reset';
  value: String | ReactNode;
}

export const Button = ({type, value}: IPropType) => {
  return (
      <button 
        type={type}
      >
        {value}
      </button>
  )
}