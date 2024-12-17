import React from 'react'
import '../mainlayout.css'
const MainLayout = () => {
  return (
    <div className='main' style={{}}>
     <div className='left-nav'>

      <div className='left-nav-inner'>
<center>    <img className='logo' src="/hyberlogo.png" alt="" /></center>
      
          <div className="co">
            <img src="/home.png" className='limg himg' alt="" />
            <div className='nav-text'>Home</div>
   
          </div>
          <div className="co">
          <img src="/application.png" className='limg' alt="" />
          <div className='nav-text'>Apllications</div>
          </div>
          <div className="co">
          <img src="/ana.png" className='limg' alt="" />
          <div className='nav-text'>Anlaytics</div>
          </div>
          <div className="co">
          <img src="/workflow.png" className='limg' alt="" />
          <div className='nav-text'>Workflows</div>
          </div>
          <div className="co">
          <img src="/devhub.png" className='limg' alt="" />
          <div className='nav-text'>Dev Hub</div>
          </div>
          <div className="co">
          <img src="/account.png" className='limg' alt="" />
          <div className='nav-text'>Account</div>
          </div>

          <div className="co key" >
          <img src="/key.png" className='limg' alt="" />
          <div className='nav-text'>Consent<br />Manager</div>
          </div>
          
        </div>
        </div>

<div className='mid-nav'>
<div className='mid-nav-title'>
Consenet Mnanager
</div>
<div className='mid-inner-nav'>
<button className="nav-bn"><img src="/demobn.png" alt="" />Demo</button>
<button className="nav-bn"><img src="/confbn.png" alt="" />Configuration</button>
<button className="nav-bn" ><img src="/searchbn.png" alt="" />Search</button>
</div>
</div>
</div>
     

  
  )
}

export default MainLayout
