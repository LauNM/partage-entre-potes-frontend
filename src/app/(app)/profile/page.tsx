'use client';

import {useEffect, useState} from "react";
import {store} from "@/redux/store";
import axios from "axios";
import {InfoCard} from "@/components/common";

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

export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

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
            <p>Profil</p>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-4 py-2 text-center">
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
                <div className="md:col-span-1 col-span-2">
                    <InfoCard type={'red'}>
                        <p>{data.total_friends_products}</p>
                        <p>Produits à emprunter</p>
                    </InfoCard>
                </div>
            </div>
        </>
    )
}