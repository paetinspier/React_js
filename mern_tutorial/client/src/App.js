import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [username, setUserName] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, [])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {name, age, username}).then((response) => {
      setListOfUsers([...listOfUsers, {name, age, username}]);
    });
  };

  const deleteUser = () => {
    Axios.delete("http://localhost:3001/deleteUser", {name, age, username}).then((response) => {
      alert("user deleted");
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return( 
          <div>
            <h1>Name: {user.name} </h1>
            <h2>Age: {user.age} </h2>
            <h3>Username: {user.username} </h3>
          </div>
          )
        })}
      </div>

      <div className='createUser'>
        <input type='text' placeholder='Name...' onChange={(event) => {
          setName(event.target.value);
        }}/>
        <input type='text' placeholder='Age...' onChange={(event) => {
          setAge(event.target.value);
        }}/>
        <input type='text' placeholder='Username...' onChange={(event) => {
          setUserName(event.target.value);
        }}/>
        <button onClick={createUser}>CREATE USER</button>
        <button onClick={deleteUser}>DELETE USER</button>
      </div>
    </div>
  );
}

export default App;
