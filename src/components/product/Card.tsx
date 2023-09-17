import { Tag } from '@/components/common'
import { AiOutlineMenu } from "react-icons/ai";
import {useSelector} from "react-redux";

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
  }
}

export default function Card({ product }: Props) {
  const user_connected_id = useSelector((state) => state.user.user.id);
  let buttonText;
/*  if (product.owner.id === user_connected_id && ) {
    buttonText =
  }*/

  return (
    <div className="product-card rounded-lg bg-grey-light shadow-lg">
      <div className="card-content bg-cover bg-center rounded-t-lg h-36" style={{backgroundImage: `url(${product.image})`}}>
        <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} className="rounded-t-lg p-2 h-36 flex flex-col justify-between">
          <div className="content-header flex justify-between text-white">
            <Tag status={product.status} />
            <span className="title text-xl font-semibold">{product.name}</span>
            <span className="burger-menu"><AiOutlineMenu /></span>
          </div>
          <div className="content-footer text-white">
            <p><span className="font-semibold">Catégorie :</span>  {product.category.name}</p>
            <p><span className="font-semibold">Propriétaire :</span> {product.owner.surname}</p>
          </div>
        </div>
      </div>

      <div className="card-footer p-2">
        <p>{product.description}</p>
        <button className="card-button">Annuler ma réservation</button>
      </div>
    </div>
  )
}