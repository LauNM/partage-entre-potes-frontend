
interface Props {
    background?: string;
    color?: string;
    text: string;
}

export default function Button({ background='red', color='red-dark', text }: Props) {
    const backgroundColor = `bg-${background}`;
    const textColor = `text-${color}`;
    // TODO default value not working
    console.log(background)
    return <button className={`rounded-lg bg-${background} text-${color}`}>{text}</button>
}
