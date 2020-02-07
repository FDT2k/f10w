import React,{useState} from 'react';


export default ({items}) => {

  const [index,setIndex]= useState(0)

  return (
    <ul className="autocomplete">
      <li>tag</li>
      {items.map(
        (item,idx) => <li className={idx==index? 'selected':''}>{item}</li>
      )}
    </ul>

  )

}
