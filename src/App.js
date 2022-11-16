import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(()=> {
    const storedUserLoggedInInformaiton = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformaiton==='1')
    {
      setIsLoggedIn(true);
    }

  },[]);

  const loginHandler = (email, password) => {

    localStorage.setItem('isLoggedIn', '1');
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn', '0');
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment>


    // Now all the child and siblings components will have an
    // access to AuthContext components

    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,

      onLogout: logoutHandler
    }}
      >

      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    //  </React.Fragment> 
  );
}

export default App;
