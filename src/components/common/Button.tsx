
interface Props {
    color: string;
    text: string;
}
export default function Button({ color, text }: Props) {
    return <button className="bg-buttonBackground text-button">{text}</button>
}