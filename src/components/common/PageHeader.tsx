import Dropdown from "@/components/common/Dropdown";
import SearchInput from "@/components/common/SearchInput";
import Button from "@/components/common/Button";
import { useState} from "react";

export default function PageHeader() {
    const [buttonSelected, setButtonSelected] = useState(false);
    const handleClick = () => {
        setButtonSelected((prev) => !prev);
    };

    return (
        <div className="w-screen p-3 flex flex-col md:flex-row-reverse justify-between gap-2">
            <SearchInput />
            <div className="flex md:flex-row sm:gap-5 justify-between text-base">
                <Button
                    text="Mes réservation"
                    onClick={handleClick}
                    type={buttonSelected ? "primary" : "outlined-primary"}
                />
                <Dropdown />
            </div>
        </div>
    )
}