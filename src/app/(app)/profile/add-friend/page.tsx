'use client';
import {TfiClose} from "react-icons/tfi";

export default function AddFriend() {
    return (
        <div className="bg-white h-full">
            <header className="flex justify-between">
                <span>Ajouter un ami</span>
                <TfiClose/>
            </header>
        </div>
    );
}