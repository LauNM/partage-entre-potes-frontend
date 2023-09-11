import {ChangeEvent} from "react";
import Link from "next/link";

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
  return (
    <div className="product-card">
      <div className="card-content">
        <div className="content-header">
          <span className="tag">{product.status}</span>
          <span className="title">{product.name}</span>
          <span className="burger-menu">...</span>
        </div>
        <div className="content-footer">
          <p>{product.category.name}</p>
          <p>{product.owner.surname}</p>
        </div>
      </div>

      <div className="card-footer">
        <p>{product.description}</p>
        <button className="card-button">Annuler ma réservation</button>
      </div>
    </div>
  )
}