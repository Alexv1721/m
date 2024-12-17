import React, { useEffect, useState } from 'react'
import '../ConsentScreen.css'
import '@fontsource/roboto'; 
import '@fontsource/inter'; 
import ConsentSDK from '../backend/back';
import { useNavigate, useParams } from 'react-router-dom';
const ConsentScreen = ({data,setdata}) => {
  const {uid}=useParams()
const nav=useNavigate('')

   const sdk=new ConsentSDK('http://13.203.21.49:3000/v1')
function handlecheck(){

}
function handledeny(){
  nav(`/`)
}


async function handleallow(){

try{
  const res=await sdk.requestConsent('customer113', 'sdsdsd','http:localhost:3000/validate','1.0','http://policy.com','please agree','consent_code','read and write data')
  
  console.log(res);
  
  // if(res){
  //   window.location.href=res.link
  // }
}

catch(err){
  console.log(err);
  
}

}
  return (
<div className='tr'>
      <div className='consentscreen'>
      <div className='head'>
<div className="logos">
<div className='l' >
            <img src='/h.png' className='clogo' alt="" />
     
        </div>
        <div className='l' style={{position:'relative',left:'-8px',zIndex:'2',borderLeft:'none'}}>
            <img src="/angel.png"  alt="" className='clogo' /></div>
</div>
        <div>
            <div className='email'>Johndoe@gmail.com</div>
            <div className='pv'>Policy Version</div>
        </div>
      </div>
      <div className='cbody'>
       <div className="ch-main">

       <div className='chbox'>
<div className='ch-text'>The following details will be collected from you by xyz name</div>
<div className='ch-div'><input type="checkbox" style={{backgroundColor:''}} onChange={handlecheck()} name="" id="" /><label htmlFor="" className='ch-label'>Facial scan</label></div>
<div className='ch-div'><input type="checkbox" onChange={handlecheck()} name="" id="" /><label htmlFor="" className='ch-label'>Location access</label></div>
<div></div>
        </div>
        <div className='purpose'>
<div className='p-head'>Purpose</div>
<div className='p-text'>Fraud prevention and compliance checks</div>
<div className='p-text'>Fraud prevention and compliance checks</div>
        </div>
       </div>
      </div>
      <div className="footer">
        <div className="f-text">
        By clicking Allow, you allow the app to use your information in accordance to their respective <span className='terms'>terms of serve</span> and <span className='terms'> privacy policies.</span>
        </div>
        <div className="f-bns">
            <button className='da-bn' onClick={handledeny} id='d'>Deny</button>
            <button className='da-bn' id='a' onClick={()=>handleallow()}>Allow</button>

        </div>
      </div>
     
    </div>
<center><div className='sdk'>SDK Version VX</div></center>
</div>
  )
}

export default ConsentScreen
