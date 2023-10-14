import Dropdown from "@/components/common/Dropdown";
import SearchInput from "@/components/common/SearchInput";
import Button from "@/components/common/Button";
import { useState } from "react";


export default function PageHeader({children, hasMyProductButton}) {
    const [buttonSelected, setButtonSelected] = useState(false);
    const handleClick = () => {
        setButtonSelected((prev) => !prev);
    };

    return (
        <>
            {children}
            <div className="w-full py-3 flex flex-col md:flex-row-reverse justify-between gap-3">
                <SearchInput />
                <div className="flex md:flex-row sm:gap-5 justify-between text-base">
                    { hasMyProductButton ? <Button
                        text="Mes réservation"
                        onClick={handleClick}
                        type={buttonSelected ? "primary" : "outlined-primary"}
                    /> : <span />}
                    <Dropdown />
                </div>
            </div>
        </>
    )
}