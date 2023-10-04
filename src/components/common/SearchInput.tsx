export default function SearchInput() {
    return (
        <>
            <input
                type="text"
                name="search"
                id="search"
                className="block w-full max-w-xs rounded-md border-0 py-1 text-primary placeholder:text-primary focus:ring-1 bg-primary-light focus:ring-inset focus:ring-primary text-lg "
                placeholder="Recherche"
            />
        </>
    )
}