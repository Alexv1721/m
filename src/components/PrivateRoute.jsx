import React, { ReactNode, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import ConsentSDK from '../backend/back'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
 
   const sdk=new ConsentSDK('http://13.203.21.49:3000')
useEffect(()=>{
async function name(params) {
  const res=await sdk.fetchConsent()
}
},[])

  return <>{children}</>;
};

export default PrivateRoute;
