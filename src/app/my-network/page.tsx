'use client';
import React, {useEffect, useState} from "react";
import Card from "@/components/product/Card";
import {useAppDispatch} from "@/redux/hooks";
import {fetchUser} from '@/redux/features/userSlice'
import {fetchFriendProduct} from '@/redux/features/productSlice'
import {useSelector} from "react-redux";
import setProductCardInfo from "@/services/setProductCardInfo";
import Modal from "@/components/product/Modal";
import {
  useCancelProductReservationMutation,
  useMakeProductReservationMutation,
  useReturnProductReservationMutation
} from "@/redux/features/productApiSlice";
import {toast} from "react-toastify";


export default function MyNetwork() {
  const [productReservation] = useMakeProductReservationMutation();
  const [cancelProductReservation] = useCancelProductReservationMutation();
  const [returnProductReservation] = useReturnProductReservationMutation();

  // @ts-ignore
  const friendProduct = useSelector((state) => state.friendProduct)
  const dispatch = useAppDispatch();
  // @ts-ignore
  const user_connected_id = useSelector((state) => state.user.user.id);
  let [openModal, setOpenModal] = useState(false);
  let [modalText, setModalText] = useState("");
  let [activeProduct, setActiveProduct] = useState("");
  let [modalAction, setModalAction] = useState("");
  let [reservationId, setReservationId] = useState(null)

  const action = ( product: any ) => {
    const { id, reservation, modalAction, popupText } = product;
   setOpenModal(true);
   setModalText(popupText);
   setActiveProduct(id);
   setReservationId(reservation?.id);
   setModalAction(modalAction);
  }

  const fetch = (func: any) => {
    return func.unwrap()
      .then(() => {
        dispatch(fetchFriendProduct())
        setOpenModal(false);
        setModalText("");
      })
      .catch(() => {
        toast.error('Une erreur est survenue');
      })
  }
  const click = (e: string | any) => {
    if(e === "validate") {
      if(modalAction === 'make-request') {
        fetch(productReservation({ product: activeProduct, requester: user_connected_id }));
      }
      if(modalAction === 'cancel-request') {
        fetch(cancelProductReservation({ id: reservationId }))
      }
      if(modalAction === 'return-request') {
        fetch(returnProductReservation({ id: reservationId }))
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
      <Modal
          openModal={openModal}
          setOpenModal={click}
          modalText={modalText}
        />
    </>
  )
}
