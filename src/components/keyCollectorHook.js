import React,{useState,useEffect} from 'react'


const memoizer = () => {
  let buffer = '';


  return {
    set: x => {
      buffer=x;
    },
    append: x=> {
      buffer=`${buffer}${x}`
    },
    reset: x=>{
      buffer=``
    },
    get: _=> buffer

  }

}


export default  ()=>{
  let buffer = memoizer();
  return callback => {
    useEffect(()=>{
      const handleKeys = (e)=>{
        callback && callback(e,buffer);
        e.stopPropagation();
        e.preventDefault();
      }
      const handleFromEvent = e => handleKeys(e)

      window.addEventListener('keyup',handleFromEvent)
      window.addEventListener('keydown',handleFromEvent)
      window.addEventListener('keypress',handleFromEvent)

      return ()=>{
        window.removeEventListener('keyup',handleFromEvent)
        window.removeEventListener('keydown',handleFromEvent)
        window.removeEventListener('keypress',handleFromEvent)
      }

    },[])



    return buffer;
  }
}
