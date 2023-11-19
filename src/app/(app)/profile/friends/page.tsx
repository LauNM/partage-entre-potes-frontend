'use client';

import { store } from '@/redux/store';
import { TfiClose } from 'react-icons/tfi';
import SearchInput from '@/components/common/SearchInput';
import axios from 'axios';
import { useEffect, useState } from 'react';

const token = store.getState().auth.userToken;

async function fetchUserList() {
  const response = await axios
  .get( `${ process.env.NEXT_PUBLIC_HOST }/api/user_list/`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  } );
  return response.data;
}

async function fetchFriendRequest() {
  const response = await axios
  .get( `${ process.env.NEXT_PUBLIC_HOST }/api/friend/request/`, {
    headers: {
      'Authorization': `Bearer ${ token }`,
      'Content-Type': 'application/json'
    }
  } );
  return response.data;
}

export default function Friends() {
  const [users, setUserList] = useState( [] );
  const [request, setFriendRequest] = useState( [] );
  const [isLoading, setLoading] = useState( true );

  useEffect( () => {
    try {
      fetchUserList()
      .then( ( response ) => {
        setUserList( response.results );
      } );
      fetchFriendRequest()
      .then( ( response ) => {
        setFriendRequest( response.results );
      } );
      setLoading( false );
    } catch (e) {
      console.log( e );
    }


  }, [] );

  if (isLoading) return <p>Loading...</p>;
  if (!users && !request) return <p>No profile data</p>;

  return (
    <div className="bg-white h-full p-5">
      <header className="flex justify-between font-semibold text-xl">
        <span>Mes amis</span>
        <TfiClose/>
      </header>
      <SearchInput/>
      { users.map( ( user ) => (
        <div key={ user.id }>
          <span>{ user.surname }</span>
        </div>
      ) ) }
    </div>
  );
}