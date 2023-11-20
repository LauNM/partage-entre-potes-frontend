import Cookies from 'js-cookie';

export const setTokenCookie = (token: any) => {
  const daysOfValidation = 7;
  Cookies.set('userToken', token, { expires: daysOfValidation });
};

export const getTokenCookie = () => {
  const userToken = Cookies.get('userToken');
  return userToken ?? null;
};

export const hasToken = () => {
  return !!Cookies.get('userToken');
};