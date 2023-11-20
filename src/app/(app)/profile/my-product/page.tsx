'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/product/Card';
import { fetchProduct } from '@/redux/features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import productCard from '@/services/productCard';
import Modal from '@/components/product/Modal';
import PageHeader from '@/components/common/PageHeader';
import Button from '@/components/common/Button';

export default function MyProduct() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch<any>();
  const user_connected_id = useSelector((state) => state.user.user.id);
  let [openModal, setOpenModal] = useState(false);
  let [modalText, setModalText] = useState('');

  const action = (text: string) => {
    setOpenModal(true);
    setModalText(text);
  };

  useEffect(() => {
    if (product.data === null) {
      dispatch(fetchProduct());
    }
  }, [dispatch, product.data]);

  if (product.loading) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 bg-white h-full"><p>Loading...</p></div>);
  }
  if (!product.loading && !product.data.length) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 bg-white h-full">
        <p>Aucun produit trouvé</p>
        <Button text={ 'Ajouter un produit' } type={ 'primary' } />
      </div>
    );
  }

  return (
    <div>
      <PageHeader>
        <p>Mes produits</p>
      </PageHeader>
      <div className="card-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 bg-white">
        { product.data.map((item: any) => {
          const product = productCard(item, user_connected_id);
          return <Card key={ item.id } product={ product } action={ action } />;
        }) }
      </div>
      { openModal ?
        <Modal openModal={ openModal } setOpenModal={ () => setOpenModal(false) } modalText={ modalText } />
        : null }
    </div>
  );
}