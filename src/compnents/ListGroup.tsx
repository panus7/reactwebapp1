// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
    items: string[];
    heading: string;

    //chils return to parent
    //(item:string) => void
    onSelectItem:(item: string) => void;
}

//org function ListGroup(props:Props) {

function ListGroup({items,heading, onSelectItem}:Props) {

  const [sIndex, setIndex] = useState(-1);

  heading = ""; //read only
   
  return (
  <>
      <h1>{heading}</h1>
      { 
        items.length === 0 && <p> no item found!</p>
      }
      
      <ul className="list-group"> 
        {
            items.map((item, index) => <li 
            className={sIndex === index ? 'list-group-item active' : 'list-group-item'}  
            key={item} 
            onClick={() => {
                setIndex(index)
                onSelectItem(item)
            }}> 
            {item}
            </li>)
        }

      </ul>
 

  </>);
}

export default ListGroup