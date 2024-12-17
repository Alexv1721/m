import React, { useState } from 'react'
import '../validateToken.css'
import ConsentSDK from '../backend/back'
import { data, useNavigate } from 'react-router-dom'
const ValidateToken = ({data,setdata}) => {
const[err,seterr]=useState('')
const[token,settoken]=useState('')
const sdk=new ConsentSDK('http://13.203.21.49:3000/v1')
const nav=useNavigate('')
function handlecheck(){
    let isvalid=true
if(token=='' || token==''){
seterr('Token is Necessery..')
isvalid=false
}
return isvalid
  }
 async function handlevalidate(){
   const v= handlecheck
   if(v){
    try{
      const res=await sdk.validateToken(token)
      console.log(res);
      nav(`end/${data.cuid}`)
    }
    catch(err){
      console.log(err);
      
    }
   }
  }

  return (
    <div className='valid-token'>
<div className='cont'><label className='tlabel' htmlFor="">Token</label> 
<input className='tinput' value={token} onChange={(e)=>settoken(e.target.value)} type="text" name="" id="" />
</div>
<button className='tbtn' onClick={()=>{
handlevalidate()
}}>Validate Token</button>
      </div>

  )
}

export default ValidateToken
