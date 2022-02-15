import { useState } from 'react'
import { signup } from '../services/auth';
import axios from 'axios';

export default function SignUp() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const API_URL = 'http://localhost5005';

  const handleSubmit = e => {
    e.preventDefault();



    //  axios.post('http://localhost:5005/api/auth/signup', {username, password})
    // .then(response => {
    //     console.log('response from server is ', response);
    //     return response.data;
    // })
    // .catch (err => {
    //     return err.response.data;
    // });


    signup(username,password)
      .then(response => {
        console.log(response);
        if (response.message){
          //reset form
          
          //set the message
          setMessage(response.message);

        }
    })
    .catch(err => console.log(err));
    
  }
  
  return (
    
    <>
      <h3>SignUp</h3>

      <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username: </label>
          <input
            type="text"
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor='password'>Password: </label>
          <input
            type="password"
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
          <button type="submit">Sign Up ✍️</button>

           {message && (
            <h3>{message}</h3>
          )}

      </form>
    </>
  )
}
