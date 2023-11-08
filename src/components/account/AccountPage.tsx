'use client';

import {useEffect, useState} from "react";
import {store} from "@/redux/store";
import axios from "axios";
import {InfoCard} from "@/components/common";
import {useSelector} from "react-redux";
import moment from "moment";
import 'moment/locale/fr'
import Link from "next/link";
import {HiOutlineBriefcase} from "react-icons/hi"
import {RiUserHeartLine, RiUserAddLine} from "react-icons/ri"
import {FiLogOut} from "react-icons/fi"

const token = store.getState().auth.userToken;

async function fetchSummary() {
    const response = await axios
        .get(`${process.env.NEXT_PUBLIC_HOST}/api/profile/summary/`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    return response.data
}

export default function AccountPage() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const user = useSelector((state) => state.user.user);

    const date = moment(user.date_joined);
    const joined_date = date.locale('fr').format('LL');

    useEffect(() => {
        fetchSummary()
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    return (
        <>
            <header className="my-4 text-blue">
                <p className="font-semibold text-2xl mb-1">{user.surname}</p>
                <p className="text-base">Membre depuis le {joined_date}</p>
            </header>

            <div className="grid grid-cols-2 gap-4 py-2 text-center">
                <div>
                    <InfoCard type={'blue'}>
                        <p>{data.total_friends}</p>
                        <p>amis</p>
                    </InfoCard>
                </div>
                <div>
                    <InfoCard type={'green'}>
                        <p>{data.total_products}</p>
                        <p>produits</p>
                    </InfoCard>
                </div>
                <div className="col-span-2">
                    <InfoCard type={'red'}>
                        <p>{data.total_friends_products}</p>
                        <p>Produits à emprunter</p>
                    </InfoCard>
                </div>
            </div>

            <div className="text-blue text-xl mt-5 font-semibold">
                <div>
                    <Link href="/profile/my-product" className="flex flex-row gap-2 items-center mb-5">
                        <HiOutlineBriefcase/>
                        Mes produits
                    </Link>
                </div>
                <div>
                    <Link href="/profile/friends" className="flex flex-row gap-2 items-center mb-5">
                        <RiUserHeartLine/>
                        Mes amis
                    </Link>
                </div>
                <div>
                    <Link href="/profile/add-friend" className="flex flex-row gap-2 items-center mb-5">
                        <RiUserAddLine/>
                        Ajouter un ami
                    </Link>
                </div>
                <div>
                    <Link href="/auth/login" className="flex flex-row gap-2 items-center mb-1">
                        <FiLogOut/>
                        Se déconnecter
                    </Link>
                </div>
            </div>
        </>
    )
}