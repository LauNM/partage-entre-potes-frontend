import { apiSlice } from "../services/apiSlice";
import {getTokenCookie} from "@/services/cookieService";

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
    results: any;
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
                url: '/friend/product/',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        }),
        makeReservation: builder.mutation({
            query: ({ product, requester }) => ({
                url: '/reservation/',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
                body: { product, requester }
            })
        }),
        cancelReservation: builder.mutation({
            query: ({ id }) => ({
                url: `/reservation/${id}/cancel/`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        }),
        acceptReservation: builder.mutation({
            query: ({ id }) => ({
                url: `/reservation/${id}/accept/`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        }),
        declineReservation: builder.mutation({
            query: ({ id }) => ({
                url: `/reservation/${id}/decline/`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        }),
        returnReservation: builder.mutation({
            query: ({ id }) => ({
                url: `/reservation/${id}/return_product/`,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${getTokenCookie()}`,
                },
            })
        })
    })
})

export const {
    useGetFriendProductQuery,
    useMakeReservationMutation,
    useCancelReservationMutation,
    useAcceptReservationMutation,
    useDeclineReservationMutation,
    useReturnReservationMutation,
} = productApiSlice;