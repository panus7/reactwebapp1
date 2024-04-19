
import { useState } from 'react';
import Message from './Message'
import Alert from './compnents/Alert';
import Button from './compnents/Button';
import ListGroup from './compnents/ListGroup'
import { About } from './pages/About';
import Navigation from './Navigation';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

import AuthContext from './compnents/AuthContext';


function App() {

  const handlerSelectItem = (item: string) => {
    console.log(item);
  }


  const items =
    [
      'New york',
      'San francisco',
      'Tokyo',
      'London',
      'Paris'
    ]

  //const [alertVisible, setAlertVisible] = useState(false);


  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>

      {/* <ListGroup items={items} heading='Cities' onSelectItem={handlerSelectItem}/> */}

      {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}

      <Button onClick={()=> setAlertVisible(true)}>Hello</Button>
      <Button color="danger" onClick={()=> setAlertVisible(false)}>Hello info color</Button> */}

      {/* <Button color="danger" onClick={() => setAlertVisible(false)}>Hello info color</Button> */}
      {/* <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}> 
      </AuthContext.Provider> */}

      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <BrowserRouter>
          {isLoggedIn ? <Navigation /> : null}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Logout" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>






    </>
  )
}

export default App;