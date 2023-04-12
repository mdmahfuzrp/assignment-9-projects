import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';


function App() {
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header></Header>
      <div className='loading-bar text-center'>{navigation.state === 'loading' && 'Loading...'}</div>
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App