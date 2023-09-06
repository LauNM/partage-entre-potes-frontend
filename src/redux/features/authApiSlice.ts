import { apiSlice } from "../services/apiSlice";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  surname: string;
}

interface UserCreateResponse {
  success: boolean;
  user: User;
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    retrieveUser: builder.query<User, void>({
      query: () => '/profile/'
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/token/',
        method: 'POST',
        body: { email, password }
      })
    }),
    register: builder.mutation({
      query: ({
          first_name,
          last_name,
          surname,
          email,
          password,
          password2
      }) => ({
        url: '/register/',
        method: 'POST',
        body: { first_name, last_name, surname, email, password, password2 }
      })
    }),
    // TODO : create this in backend to verify email
    verify: builder.mutation({
      query: () => ({
        url: '/verify/',
        method: 'POST'
      })
    }),
    // TODO : create this in backend
    logout: builder.mutation({
      query: () => ({
        url: '/logout/',
        method: 'POST'
      })
    }),
    // TODO : create this in backend
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: '/activation/',
        method: 'POST',
        body: { uid, token }
      })
    }),
    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/password_reset/',
        method: 'POST',
        body: { email }
      })
    }),
    confirmResetPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: '/password_reset/confirm/',
        method: 'POST',
        body: { password, token }
      })
    })
  })
})

export const {
    useRetrieveUserQuery,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useConfirmResetPasswordMutation,
} = authApiSlice;