interface Props {
  type?: string;
}

const style: object = {
  default: 'ring-blue',
  blue: 'bg-blue text-white',
  red: 'bg-red text-white',
  green: 'bg-green text-white',
  grey: 'bg-grey text-white',
};

export default function InfoCard({ type, children }: Props) {
  return (
    <div className={ `rounded-lg px-4 py-8 font-semibold ${ style[type || 'default'] }` }>
      { children }
    </div>
  );
}