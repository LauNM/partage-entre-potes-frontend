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
  };
}

const status = {
  available: 'Available',
  booked: 'Booked',
  borrowed: 'Borrowed',
};

export default function productCard(product: Product, userConnectedId: String) {

  const isOwner = !product?.owner;
  let showButton = false;
  let buttonText = '';
  let disabled = true;
  let popupText = '';


  const setButtonActive = () => {
    showButton = true;
    disabled = false;
  };

  if (product.status === status.available) {
    if (isOwner) {
      disabled = false;
    } else {
      setButtonActive();
      buttonText = 'Je réserve';
      popupText = 'Vous êtes sur le point de réserver cet article.';
    }
  }
  if (product.status === status.booked) {
    if (isOwner) {
      setButtonActive();
      buttonText = 'Voir la demande de réservation';
      popupText = `${ product.reservation.requester_name } vous a envoyé une demande de réservation pour votre ‘${ product.name }’ le ${ product.reservation.created_at }`;
    }
    if (userConnectedId === product.reservation.requester_id) {
      setButtonActive();
      buttonText = 'Annuler ma réservation';
      popupText = 'Etes vous sûr de vouloir annuler votre demande de réservation ?';
    }
  }
  if (product.status === status.borrowed) {
    if (isOwner) {
      setButtonActive();
      buttonText = 'Je l\'ai récupéré';
      popupText = 'Je confirme avoir récupéré mon produit.';
    }
    if (userConnectedId === product.reservation.requester_id) {
      setButtonActive();
      buttonText = 'Je l\'ai rendu';
      popupText = `Je confirme avoir rendu le produit à ${ product.owner.surname }.`;
    }
  }

  return {
    ...product,
    buttonText,
    showButton,
    popupText,
    disabled,
    isOwner,
  };

};