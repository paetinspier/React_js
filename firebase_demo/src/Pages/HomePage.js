import React, {useRef} from 'react';
import { firestore } from '../firebase';
import { addDoc, getDocs, collection, query, where } from "@firebase/firestore";

function HomePage() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const ref = collection(firestore, "Users");


    const handleSaveName = async (e) => {
        e.preventDefault();

        let available = true;

        let data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        const q = query(ref, where("username", "==" , data.username));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            alert("This username is taken");
            available = false;
        });

        if(available){
            try{
                addDoc(ref, data);
                alert("successfully created new user");
            }catch (e){
                console.log(e);
            }
        }
    }



  return (
    <div>
        <h1>HOME PAGE</h1>

        <div>
            <form onSubmit={handleSaveName}>
                <label>Enter Username</label>
                <input type="text" ref={usernameRef}/>
                <label>Enter Password</label>
                <input type="text" ref={passwordRef}/>
                <button type='submit'>ENTER</button>
            </form>
        </div>
    </div>
  )
}

export default HomePage