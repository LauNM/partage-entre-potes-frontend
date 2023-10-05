import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    list?: any[];
    defaultElement?: string;
}

export default function Dropdown({list, defaultElement}: Props) {
    return (
        <span className="flex items-center flex-row gap-2">
            <label htmlFor="sort-by">Trier par :</label>
            <select
                name="sort"
                id="sort-by"
                className="rounded-lg px-4 py-1 bg-button-light text-button border-0 w-32 text-base"
            >
                <option value="category">Category</option>
                <option value="owner">Propriétaire</option>
                <option value="status">Statut</option>
            </select>
        </span>
    )
}