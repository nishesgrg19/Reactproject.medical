import React,{useState} from 'react'

export default function Form
() {
  const[object,setobject]=useState(
    {myname:'Nishes Gurung',age:19 ,address:'Thali'}
    
  )
  let ok=(o)=>{
    setobject({...object,address:'kathmadni'})
  }
  


  return (
    <div className='bg-secondary text-white'>
    <h4>MY NAME:{object.myname}</h4>
    <h5>Age:{object.age}</h5>
    <h5>Address:{object.address}</h5>
    <button onClick={ok}>SUBMIT</button>

    </div>
  )
}

