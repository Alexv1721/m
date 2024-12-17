import React, { useState } from 'react'
import '../iscreen.css'
import ConsentSDK from '../backend/back'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const InputScreen = ({data,setdata}) => {
  const nav=useNavigate('')
  const sdk=new ConsentSDK('http://13.203.21.49:3000/v1')
  
  const [err, seterr] = useState({
    cudiderr: '',
    reurierr: '',
    pversionerr: '',
    purposeerr: '',
    scopeerr: ''
  })
  const [merr,setmerr]=useState('')
  function Validate() {
    
    if (data.cudid === '') {
      seterr((prev) => ({ ...prev, cudiderr: 'Customer ID is Required' }))
    return false
    } else {
      seterr((prev) => ({ ...prev, cudiderr: '' }))
    }
    if (data.reuri === '') {
      seterr((prev) => ({ ...prev, reurierr: 'Redirect ID is Required' }))
      return false
    } else {
      seterr((prev) => ({ ...prev, reurierr: '' }))
    }
    if (data.pversion === '') {
      seterr((prev) => ({ ...prev, pversionerr: 'Policy Version is Required' }))
      return false
    } else {
      seterr((prev) => ({ ...prev, pversionerr: '' }))
    
    }
    if (data.purpose === '') {
      seterr((prev) => ({ ...prev, purposeerr: 'Purpose field is Required' }))
return false
    } else {
      seterr((prev) => ({ ...prev, purposeerr: '' }))
    }
    if (data.scope === '') {
      seterr((prev) => ({ ...prev, scopeerr: 'Scope field is Required' }))
      return false
    } else {
      seterr((prev) => ({ ...prev, scopeerr: '' }))
    }
    return true;
  }

async function handleRequestconsenet(e) {
    e.preventDefault()
    const valid = Validate()
    if (valid) {
      nav(`/consent/${data.cudid}`)
    }
  }

  return (
    <div className='iscreen'>
      <span className='merr'>{merr}</span>
      <div className='inutscreen-text'>Enter Consent Details</div>
      <form action="" className='input-screen-form'>
        <span className='errmsg'>{err.cudiderr}</span>
        <div className='c'>
          <label className='inputscreen-label' htmlFor="">Customer ID</label>
          <input type="text" value={data.cudid} onChange={(e) => setdata({ ...data, cudid: e.target.value })} className='inputscreen-input' name="" id="" />
        </div>
        <span className='errmsg'>{err.reurierr}</span>
        <div className='c'>
          <label className='inputscreen-label' htmlFor="">Redirect URI</label>
          <input type="text" value={data.reuri} onChange={(e) => setdata({ ...data, reuri: e.target.value })} className='inputscreen-input' name="" id="" />
        </div>
        <span className='errmsg'>{err.pversionerr}</span>
        <div className='c'>
          <label className='inputscreen-label' htmlFor="">Policy Version</label>
          <input type="text" value={data.pversion} onChange={(e) => setdata({ ...data, pversion: e.target.value })} className='inputscreen-input' name="" id="" />
        </div>
        <span className='errmsg'>{err.purposeerr}</span>
        <div className='c'>
          <label className='inputscreen-label' htmlFor="">Purpose</label>
          <input type="text" value={data.purpose} onChange={(e) => setdata({ ...data, purpose: e.target.value })} className='inputscreen-input' name="" id="" />
        </div>
        <span className='errmsg'>{err.scopeerr}</span>
        <div className='c'>
          <label className='inputscreen-label' htmlFor="">Scope</label>
          <input type="text" value={data.scope} onChange={(e) => setdata({ ...data, scope: e.target.value })} className='inputscreen-input' name="" id="" />
        </div>
        <button className='iscreen-bn' onClick={(e) => {
          handleRequestconsenet(e)
        }}>Request Consenst</button>
      </form>
    </div>
  )
}

export default InputScreen
