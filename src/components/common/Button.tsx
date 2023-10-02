import {MouseEventHandler} from "react";

interface Props {
    type?: string;
    text: string;
    onClick?: MouseEventHandler;
}

const style: object = {
    default: {
        background: 'bg-button-light',
        color: 'text-button'
    },
    primary: {
        background: 'bg-primary',
        color: 'text-white'
    }
}

export default function Button({ type, text, onClick }: Props) {
    // @ts-ignore
    const {background, color } = style[type || 'default'];
    return <button onClick={onClick} className={`rounded-lg px-4 py-1 ${background} ${color}`}>{text}</button>
}
