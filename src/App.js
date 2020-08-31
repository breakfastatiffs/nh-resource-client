import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Login from './Login/Login';

function App() {
  return (
    <main className='App'>
      <Header />
      <Nav />
      <Home />
      <Login />
    </main>
  );
}

export default App;