'use client';
import React, {useEffect, useState} from "react";
import Card from "@/components/product/Card";
import {useAppDispatch} from "@/redux/hooks";
import {fetchUser} from '@/redux/features/userSlice'
import {fetchFriendProduct} from '@/redux/features/productSlice'
import {useSelector} from "react-redux";
import setProductCardInfo from "@/services/setProductCardInfo";
import Modal from "@/components/product/Modal";
import {setLazyProp} from "next/dist/server/api-utils";
import {
  useCancelReservationMutation,
  useMakeReservationMutation,
  useReturnReservationMutation
} from "@/redux/features/productApiSlice";
import {toast} from "react-toastify";
import {act} from "react-dom/test-utils";


export default function MyNetwork() {
  const [makeReservation] = useMakeReservationMutation();
  const [cancelReservation] = useCancelReservationMutation();
  const [returnReservation] = useReturnReservationMutation();

  // @ts-ignore
  const friendProduct = useSelector((state) => state.friendProduct)
  const dispatch = useAppDispatch();
  // @ts-ignore
  const user_connected_id = useSelector((state) => state.user.user.id);
  let [openModal, setOpenModal] = useState(false);
  let [modalText, setModalText] = useState("");
  let [activeProduct, setActiveProduct] = useState(null);
  let [reservationId, setReservationId] = useState(null);
  let [modalAction, setModalAction] = useState(null);


  const action = (product: any) => {
    const {id, reservation, popupText, modalAction} = product;
    setOpenModal(true);
    setModalText(popupText);
    setActiveProduct(id)
    setReservationId(reservation?.id);
    setModalAction(modalAction);
  }

  const fetch = (func:any) => {
    return func
      .unwrap()
      .then(() => {
        setOpenModal(false);
        dispatch(fetchFriendProduct())
      })
      .catch(() => {
      toast.error('Une erreur est survenue');
    })
  }
  // TODO : ne marche pas au premier click ...
  const click = (e: string | any) => {
    if (e === "validate") {
      if (modalAction === "make-request") {
        fetch(makeReservation({ product: activeProduct, requester: user_connected_id }))
      }
      if (modalAction === "cancel-request") {
        fetch(cancelReservation({ id: reservationId }))
      }
      if (modalAction === "return-request") {
        fetch(returnReservation({ id: reservationId }))
      }
    }
    setOpenModal(false);
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
          const product = setProductCardInfo(item, user_connected_id);
          return <Card key={item.id} product={product} action={action}/>
        })}
      </div>
      {openModal ?
        <Modal openModal={openModal} click={click} modalText={modalText} />
        : null}
    </>
  )
}
