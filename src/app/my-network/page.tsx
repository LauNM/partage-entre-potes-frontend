'use client';

import { useGetFriendProductQuery } from "@/redux/features/productApiSlice";
import Card from "@/components/product/Card";
import { useGetProfileQuery } from '@/redux/features/authApiSlice';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";


export default function MyNetwork() {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFriendProductQuery();

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
    result = <div className="card-wrapper">
      {friendProducts.map((item: object) => {
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