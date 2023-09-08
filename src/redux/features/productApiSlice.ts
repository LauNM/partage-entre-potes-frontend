import { apiSlice } from "../services/apiSlice";
import {getTokenCookie} from "@/redux/services/cookieService";

interface Category {
    id: string;
    name: string;
}

interface  Reservation {
    id: string;
    requester_id: string;
    requester_surname: string;
    created_at: Date;
}
interface Product {
    id: string;
    name: string;
    description: string;
    date_created: Date;
    date_updated: Date;
    status: string;
    category: Category;
    reservation: Reservation;
    image: string;
}

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getFriendProduct: builder.query<Product, void>({
            query: () => ({
                url: '/friend_list/product/',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        })
    })
})

export const {
    useGetFriendProductQuery,
} = productApiSlice;