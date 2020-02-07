import React from 'react'

const stringToStructuredInstruction = string => {
  return {cmd:string}
}



export default ({value}) => {



  return (
  <>
    {value || '[type something]'}
  </>

  )

}
