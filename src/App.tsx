
import { useState } from 'react';
import Message from './Message'
import Alert from './compnents/Alert';
import Button from './compnents/Button';
import ListGroup from './compnents/ListGroup'

function App() {
 
  const handlerSelectItem = (item:string) =>{
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

  const [alertVisible,setAlertVisible]= useState(false);

  return (
    <>
    
      {/* <ListGroup items={items} heading='Cities' onSelectItem={handlerSelectItem}/> */}

      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}

      <Button onClick={()=> setAlertVisible(true)}>Hello</Button>
      <Button color="danger" onClick={()=> setAlertVisible(false)}>Hello info color</Button>

      

    </>
  )
}

export default App;