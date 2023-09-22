'use client';
import React, {useEffect, useState} from "react";
import Card from "@/components/product/Card";
import {useAppDispatch} from "@/redux/hooks";
import {fetchUser} from '@/redux/features/userSlice'
import {fetchFriendProduct} from '@/redux/features/productSlice'
import {useSelector} from "react-redux";
import productCard from "@/services/productCard";


export default function MyNetwork() {
  // @ts-ignore
  const friendProduct = useSelector((state) => state.friendProduct)
  const dispatch = useAppDispatch();
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
    return (<div><p>Pas de résultat</p></div>)
  }

  return (
    <>
      <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {friendProduct.friend_product.map((item: any) => {
          const product = productCard(item, user_connected_id);
          return <Card key={item.id} product={product} action={action}/>
        })}
      </div>
      {openModal ?
      <div>{modalText}</div> : null}
    </>
  )
}
