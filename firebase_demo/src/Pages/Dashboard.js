import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import {firestore} from '../firebase';
import { getDocs, collection, query, where } from '@firebase/firestore';


export default function Dashboard() {

  const {userName} = useContext(UserContext);
  const {userPassword} = useContext(UserContext);
  const usersRef = collection(firestore, "Users");
  const data = new FormData();

  data.append('email', userName);
  data.append('password', userPassword);

  let valid = false;

  const q = query(usersRef, where('username', '==', data.get('email')), where('password', '==', data.get('password')));

  getDocs(q).then( (querySnapshot) => {
    querySnapshot.forEach(() => {
      valid = true;
      console.log("valid is true");
    })
  });


  return (
    <div>
      {valid ? <ValidDashboard/> : <InvalidDashboard/>}
    </div>
  )
}


function ValidDashboard(){


  return(
    <div>
      <h1>valid dashboard</h1>
    </div>
  );
}

function InvalidDashboard(){


  return(
    <div>
      <h1>valid dashboard</h1>
    </div>
  );
}