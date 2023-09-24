import {useMakeProductReservationMutation} from "@/redux/features/productApiSlice";
import {toast} from "react-toastify";

interface Props {
  product: any;
  requester: string;
}
export default function useProductReservation({product, requester}: Props) {
  const [productReservation, {isLoading}] = useMakeProductReservationMutation();

  productReservation({ product, requester })
    .unwrap()
    .then(() => {

    })
    .catch(() => {
      toast.error('Une erreur est survenue');
    })
}