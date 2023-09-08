import Cookies from 'js-cookie';

// Fonction pour enregistrer le token dans un cookie
export const setTokenCookie = (token) => {
    Cookies.set('userToken', JSON.stringify(token), { expires: 7 }); // Vous pouvez définir la durée de validité ici, par exemple, 7 jours
};

// Fonction pour récupérer le token depuis le cookie
export const getTokenCookie = () => {
    const userToken = Cookies.get('userToken');
    return userToken ? JSON.parse(userToken) : null;
};

export const hasToken = () => {
    return !!Cookies.get('userToken');
}