import React,{useState,useEffect} from 'react'

import Visual from './visual'
import Autocomplete from './autocomplete'
import makeUseKeyCollector from '../keyCollectorHook'



const flowReducer = (e,{buffer:{get,set,append},setValue}) => {
  const currentValue = get();
  if(e.key.length===1 && e.type==='keydown'){
    append(e.key)
  }else if (e.key === 'Backspace' && e.type==='keydown') {
    set(currentValue.slice(0,-1))
  }

  if (e.key === '#' && e.type==='keydown'){
    console.log('intag')
  }

  setValue(get())
  return currentValue
}




const tag = ({name}) => {

  return (
    <div className="tag">{name}</div>
  )

}

const useKeyCollector = makeUseKeyCollector();

export default props => {

  const [value,setValue] = useState('');


  const onKeyTyped = event=>flowReducer(event,{buffer,setValue})

  const buffer= useKeyCollector(onKeyTyped)
  return (
    <>
        <ul className="autocomplete">
          <li>#: search_tag</li>
          <li>TAB add tag</li>
          <li>@: ref</li>
          <li>/: c.f.</li>
        </ul>
      {/* <input type="text" readOnly={true}  value={value} className="f10w"/>*/}
      {/*<Autocomplete items={['idee','projet']}/>*/}
      <Visual value={value}/>

    
    </>
  )

}
