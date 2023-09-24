import {Tag} from "@/components/common";
import {AiOutlineMenu} from "react-icons/ai";
import Button from "@/components/common/Button";
import Image from "next/image";

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
    },
    buttonText: string;
    showButton: boolean;
    popupText: string;
    disabled: boolean;
    isOwner: boolean;
    modalAction: string;
  },
  action: any;
}

export default function Card({product, action}: Props) {

  return (
    <div className="product-card rounded-lg bg-grey-light text-base shadow-lg relative">
      <div className="card-content relative bg-cover bg-center rounded-t-lg h-36">
        {product.image ? <Image src={product.image} alt={product.name} fill={true} objectFit={"cover"} className={"rounded-t-lg"} /> : null}
        <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}} className="relative rounded-t-lg z-10 p-2 h-36 flex flex-col justify-between">
          <div className="text-white">
            <div className="content-header flex justify-between">
              <Tag status={product.status} />
              { product.isOwner ? <span className="burger-menu"><AiOutlineMenu /></span> : null }
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
          {product.showButton ?
            <Button text={product.buttonText} onClick={() => {action(product)}} />
            : null }
        </div>
      </div>
      {product.disabled ? <div className="rounded-lg absolute top-0" style={{
        background: 'linear-gradient(rgba(217, 217, 217, 0.6), rgba(217, 217, 217, 0.6))',
        height: '100%',
        width: '100%',
      }} /> : null}
    </div>
  )}