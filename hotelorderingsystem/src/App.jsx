import './App.css';

import { useState, useEffect } from 'react';
import { fetchLogin } from './services';
import { fetchSession } from './services';

import Show from './Show'

function App() {

  const [personalInfo, setPersonalInfo] = useState();
  const [usernameInput, setUsernameInput] = useState('');
  const [errorInfo, setErrorInfo] = useState('');

  useEffect(
    () => {
      fetchSession()
      .then( username => {
        setPersonalInfo(username.username);
      })
      .catch( error => {
        console.log(error);
      });
    },
    []
  );

  // a new login, check the username to init the account
  function checkUsername() {
    fetchLogin(usernameInput)
    .then( username => {
      setPersonalInfo(usernameInput);
      setUsernameInput('');
      setErrorInfo('');
    })
    .catch(error => {
      setErrorInfo(error.error.error);
    });
  }

  return (
    <div className="app">
      {!personalInfo && (
        // login part
        <div className="login">
          <form onSubmit={(e) => e.preventDefault()}>
            <span className="login__span">Username:</span><br/>
            <input className="login__input" type="text" required
               onChange={ (e) => setUsernameInput(e.target.value) }
               ></input><br/>
               <div className='error__message'>
                 {errorInfo}
               </div>
            <button 
                className="login__button"
                disabled = {usernameInput === "" ? "disabled" : ""}
                onClick={ 
                  (e) => { 
                    // (e.preventDefault())
                    checkUsername()
                  } 
                }
            >Login</button>
          </form>
        </div>
      )}
      {personalInfo && <Show personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>}
    </div>
  );
}

export default App;
