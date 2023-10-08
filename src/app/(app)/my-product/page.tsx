'use client';
import React, {useEffect, useState} from "react";
import Card from "@/components/product/Card";
import {fetchUser} from '@/redux/features/userSlice'
import {fetchProduct} from '@/redux/features/productSlice'
import {useDispatch, useSelector} from "react-redux";
import productCard from "@/services/productCard";
import Modal from "@/components/product/Modal";
import Button from "@/components/common/Button";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
export default function MyProduct() {
    // @ts-ignore
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch<any>();
    // @ts-ignore
    const user_connected_id = useSelector((state) => state.user.user.id);
    let [openModal, setOpenModal] = useState(false);
    let [modalText, setModalText] = useState("");


    const action = (text: string) => {
        setOpenModal(true);
        setModalText(text);
    }
    useEffect(() => {

        if(product.data === null) {
            dispatch(fetchProduct())
        }
    }, [dispatch, product.data]);

    if(product.loading) {
        return (<div><p>Loading...</p></div>)
    }
    if(!product.loading && !product.data.length) {
        return (
            <div className="flex flex-col justify-center items-center gap-6" style={{height: '90vh'}}>
                <p>Aucun produit trouvé</p>
                {/*<Link href="/profile">
                    <Button text={"Ajouter un nouvel ami"} type={"primary"} />
                </Link>*/}

            </div>
        )
    }

    return (
        <>
            <PageHeader>
                <p>Mes produits</p>
            </PageHeader>
            <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
                {product.data.map((item: any) => {
                    const product = productCard(item, user_connected_id);
                    return <Card key={item.id} product={product} action={action}/>
                })}
            </div>
            {openModal ?
                <Modal openModal={openModal} setOpenModal={() => setOpenModal(false)} modalText={modalText} />
                : null}
        </>
    )
}