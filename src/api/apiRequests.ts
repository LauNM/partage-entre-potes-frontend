import { store } from '@/redux/store';

export async function getUser() {
  const token = store.getState().auth.userToken;
  return await fetch(`${ process.env.NEXT_PUBLIC_HOST }/api/profile/`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Accès non autorisé');
  });
}