import React from 'react'
import '../EndScreen.css'
import ValidateToken from './ValidateToken'
const EndScreen = () => {
  return (


<div className='end'>
<div className='evalid-token'>
  
  <div className='econt'><label className='etlabel' htmlFor="">Token</label> <input className='etinput' type="text" name="" id="" />
  </div>
  <button className='etbtn'>Validate Token</button>
        </div>

    <div className="details">
<div className="end-h">
    <div className='c-status'>Consent Status</div>
    <button className='abn'><div className='t-div'><img className='timg' src="tick.png" alt="" /><div style={{width:'60px',height:'20px'}} >Accepted</div></div></button>
    </div>     
    
       
<div className="d">
    <div className="h">
        Consent Details
    </div>

    <div className='b'>
        
    <div className='dd'>
        <div className='hd'>Device ID</div>
        <div className='hh'>b9f8e2d4-9c3a-4571-ae84-3c9df20297a1</div>
    </div>
    <div className='dd'>
        <div className='hd'>hashedUserId</div>
        <div className='hh'>e3b0c44298fc1c149afbf4c8996fb<br /> 92427ae41e4649b934ca495991b7852 <br /> b855</div>
    </div>
    <div className='dd'>
        <div className='hd'>timestamp</div>
        <div className='hh'>2024-06-12T14:35:22Z</div>
    </div>
    <div className='dd'>
        <div className='hd'>ipAddress</div>
        <div className='hh'>192.168.1.15</div>
    </div>
    <div className='dd'>
        <div className='hd'>Scope</div>
        <div className='hh'>facial scan, Location Access</div>
    </div>
    <div className='dd'>
        <div className='hd'>Purpose</div>
        <div className='hh'>User onboarding and identity verification <br />Fraud prevention and compliance checks</div>
    
</div>
    
    </div>

    <div className="h">
        Tenure
    </div>

    <div className='b'>
        
    <div className='dd'>
        <div className='hd'>Scope</div>
        <div className='hh'>Chrome</div>
    </div>
    <div className='dd'>
        <div className='hd'>browserVersion</div>
        <div className='hh'>124.0.6367.119</div>
    </div>
    <div className='dd'>
        <div className='hd'>operatingSystem</div>
        <div className='hh'>Windows 11</div>
    </div>
    <div className='dd'>
        <div className='hd'>deviceType</div>
        <div className='hh'>Desktop</div>
    </div>
    </div>

</div>

    </div>
  </div>

  )
}

export default EndScreen
