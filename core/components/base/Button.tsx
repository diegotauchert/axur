import {ReactNode} from 'react';

type IPropType = {
  type: 'submit' | 'button' | 'reset';
  value: String | ReactNode;
  id?: string
}

export const Button = ({type, value, id}: IPropType) => {
  return (
      <button 
        type={type}
        id={id}
      >
        {value}
      </button>
  )
}