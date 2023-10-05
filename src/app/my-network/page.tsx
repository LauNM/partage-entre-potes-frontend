'use client';
import React, {useEffect, useState} from "react";
import Card from "@/components/product/Card";
import {fetchUser} from '@/redux/features/userSlice'
import {fetchFriendProduct} from '@/redux/features/productSlice'
import {useDispatch, useSelector} from "react-redux";
import productCard from "@/services/productCard";
import Modal from "@/components/product/Modal";
import Button from "@/components/common/Button";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";


export default function MyNetwork() {
  // @ts-ignore
  const friendProduct = useSelector((state) => state.friendProduct)
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

    if(friendProduct.friend_product === null) {
      dispatch(fetchUser())
      dispatch(fetchFriendProduct())
    }
  }, [dispatch, friendProduct.friend_product]);

  if(friendProduct.loading) {
    return (<div><p>Loading...</p></div>)
  }
  if(!friendProduct.loading && !friendProduct.friend_product.length) {
    return (
        <div className="flex flex-col justify-center items-center gap-6" style={{height: '90vh'}}>
          <p>Aucun produit trouvé</p>
            <Link href="/profile">
                <Button text={"Ajouter un nouvel ami"} type={"primary"} />
            </Link>

        </div>
    )
  }

  return (
    <>
      <PageHeader />
      <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {friendProduct.friend_product.map((item: any) => {
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
