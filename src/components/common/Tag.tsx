interface Props {
  status: string;
}

const states = {
  Available: {
    background: 'bg-green-light',
    color: 'text-green',
    text: 'Disponible',
  },
  Booked: {
    background: 'bg-primary-light',
    color: 'text-primary-dark',
    text: 'Réservé',
  },
  Borrowed: {
    background: 'bg-red-light',
    color: 'text-red',
    text: 'Emprunté',
  },
};
export default function Tag({ status }: Props) {


  // @ts-ignore
  const { background, color, text } = states[status];

  return <span
    className={ `${ background } ${ color } px-2 rounded text-sm sm:text-base self-baseline w-20 text-center` }>{ text }</span>;

}