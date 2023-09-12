'use client';
import React, { useEffect, useRef, useState, useCallback } from "react";
import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import Card from "@/components/product/Card";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';
import {useAppDispatch} from "@/redux/hooks";
import {setUser} from "@/redux/features/userSlice";
import {setFriendProduct} from "@/redux/features/productSlice";
import {getUser} from "@/api/apiRequests";


export default function MyNetwork() {
  const dispatch = useAppDispatch();

  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useGetFriendProductQuery();

  const fetchUser = useCallback(async () => {
    try {
      const { body } = await getUser();
      dispatch(setUser(body))
    } catch(e) {
      console.log(e)
    }
  },[dispatch])

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);


  let result;

  if (isLoading) {
    result = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    const friendProducts = data.results
    result = <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
      {friendProducts.map((item: any) => {
        return <Card key={item.id} product={item} />
      })}
    </div>
  } else if (isError) {
    result = <div className="alert alert-danger" role="alert">
     Une erreur est survenue
    </div>
  }

  return <div>{ result }</div>
}