'use client';
import React, { useEffect, useRef, useState, useCallback } from "react";
import Card from "@/components/product/Card";
import {useAppDispatch} from "@/redux/hooks";
import {useSelector} from "react-redux";
import { fetchUser } from '@/redux/features/userSlice'
import { fetchFriendProduct } from '@/redux/features/productSlice'
import {useGetFriendProductQuery} from "@/redux/features/productApiSlice";
import {useGetProfileQuery} from "@/redux/features/authApiSlice";


export default function MyNetwork() {
    const { data } = useGetProfileQuery();
  const product = useSelector((state) => state.friendProduct)
  const dispatch = useAppDispatch();


 console.log(data)
  /*useEffect(() => {
      dispatch(useGetProfileQuery())
    /!*dispatch(fetchUser())
    dispatch(fetchFriendProduct())*!/

  }, []);*/


  return (
      <div>
       {/* <p>test</p>
        {product.loading && <div>Loading...</div>}
        {!product.loading && product.error ? <div>Error: {product.error}</div> : null}
        {!product.loading && product.friend_product.length ? (
        <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {product.friend_product.map((item: any) => {
        return <Card key={item.id} product={item} />
        })}
        </div>) : null }*/}
      </div>
  )
}
