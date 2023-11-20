import { MouseEventHandler } from 'react';

interface Props {
  type?: string;
  text: string;
  onClick?: MouseEventHandler;
}

const style: object = {
  default: 'bg-button-light text-button',
  primary: 'bg-primary text-white',
  'outlined-primary': 'bg-white text-primary ring-1 ring-primary',
};

export default function Button({ type, text, onClick }: Props) {
  return <button onClick={ onClick }
                 className={ `rounded-lg px-4 py-1 ${ style[type || 'default'] }` }>{ text }</button>;
}
