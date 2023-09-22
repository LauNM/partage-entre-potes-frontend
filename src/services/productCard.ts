import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

interface Product {
  id: string;
  name: string;
  owner: {
    id: string;
    surname: string;
  };
  description: string;
  status: string;
  category: {
    id: string;
    name: string;
  };
  image: string;
  reservation: {
    id: string;
    requester_id: string;
    requester_name: string;
    created_at: any;
  }
}

const status = {
  available: "Available",
  booked: "Booked",
  borrowed: "Borrowed"
}

export default function productCard(product: Product, userConnectedId: string) {

  const isOwner = userConnectedId === product.owner.id;
  let showButton = false;
  let buttonText = '';
  let disabled = true;
  let popupText = '';


  const setButtonActive = () => {
    showButton = true;
    disabled = false;
  }

  if (product.status === status.available
    && product.owner.id !== userConnectedId) {
    setButtonActive();
    buttonText = "Je réserve";
    popupText = "Réserver le produit";

  }
  if (product.status === status.booked) {
    if (isOwner) {
      setButtonActive();
      buttonText = "Voir la demande de réservation";
      popupText = "produit réservé par :";
    }
    if (userConnectedId === product.reservation.requester_id) {
      setButtonActive();
      buttonText = "Annuler ma réservation";
      popupText = "annuler votre réservation ?";
    }
  }
  if (product.status === status.borrowed) {
    if (isOwner) {
      setButtonActive();
      buttonText = "Je l'ai récupéré";
      popupText = "confirmer l\'avoir récupéré";
    }
    if (userConnectedId === product.reservation.requester_id) {
      setButtonActive();
      buttonText = "Je l'ai rendu";
      popupText = "confirmer avoir rendu le produit";
    }
  }

  return {
    ...product,
    buttonText,
    showButton,
    popupText,
    disabled,
    isOwner
  }

};