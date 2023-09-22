import {useSelector} from "react-redux";
import {Tag} from "@/components/common";
import {AiOutlineMenu} from "react-icons/ai";
import Button from "@/components/common/Button";
import {useEffect, useState} from "react";
import {boolean} from "zod";

interface Props {
  product: {
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
}

const status = {
  available: "Available",
  booked: "Booked",
  borrowed: "Borrowed"
}

export default function Card({ product }: Props) {
  // @ts-ignore
  const user_connected_id = useSelector((state) => state.user.user.id);
  const isOwner = user_connected_id === product.owner.id;
  let [showButton, setShowButton] = useState(false);
  let [buttonText, setButtonText] = useState('');
  let [disabled, setDisabled] = useState(true);
  let [popupText, setPopupText] = useState('');

  const action = (text: string) => {
    console.log(text)
  }

  const setButtonActive = () => {
    setShowButton(true);
    setDisabled(false);
  }

  useEffect(() => {
    if(product.status === status.available
      && product.owner.id !== user_connected_id) {
      setButtonActive();
      setButtonText("Je réserve");
      setPopupText("Réserver le produit");

    }
    if(product.status === status.booked) {
      if (isOwner) {
        setButtonActive();
        setButtonText("Voir la demande de réservation");
        setPopupText("produit réservé par :");
      }
      if (user_connected_id === product.reservation.requester_id) {
        setButtonActive();
        setButtonText("Annuler ma réservation");
        setPopupText("annuler votre réservation ?");
      }
    }
    if(product.status === status.borrowed) {
      if (isOwner) {
        setButtonActive();
        setButtonText("Je l'ai récupéré");
        setPopupText("confirmer l\'avoir récupéré");
      }
      if (user_connected_id === product.reservation.requester_id) {
        setButtonActive();
        setButtonText("Je l'ai rendu");
        setPopupText("confirmer avoir rendu le produit");
      }
    }
  }, [product, user_connected_id, isOwner])


  return (
    <div className="product-card rounded-lg bg-grey-light text-base shadow-lg relative">
      <div className="card-content bg-cover bg-center rounded-t-lg h-36" style={{backgroundImage: `url(${product.image})`}}>
        <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} className="rounded-t-lg p-2 h-36 flex flex-col justify-between">
          <div className="text-white">
            <div className="content-header flex justify-between">
              <Tag status={product.status} />
              { isOwner ? <span className="burger-menu"><AiOutlineMenu /></span> : null }
            </div>
            <div className="flex justify-center pt-1">
              <span className="title text-xl font-semibold">{product.name}</span>
            </div>
          </div>
          <div className="content-footer text-lg text-white">
            <p><span className="font-semibold">Catégorie :</span>  {product.category.name}</p>
            <p><span className="font-semibold">Propriétaire :</span> {product.owner.surname}</p>
          </div>
        </div>
      </div>
      <div className="card-footer p-2">
        <p>{product.description}</p>
        <div className="flex justify-center mt-4">
          {showButton ?
            <Button text={buttonText} onClick={() => {action(popupText)}} />
            : null }
        </div>
      </div>
      {disabled ? <div className="rounded-lg absolute top-0" style={{
        background: 'linear-gradient(rgba(217, 217, 217, 0.6), rgba(217, 217, 217, 0.6))',
        height: '100%',
        width: '100%',
      }} /> : null}
    </div>
  )}