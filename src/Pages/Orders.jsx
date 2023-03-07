// import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Orders = () => {

    const navigate = useNavigate()
    const {pathname} = useLocation();
  

    // useEffect(()=>{
    //   console.log(obj)
    // })
  return (

    <>
    <div>Order Confirmed</div>
    <button onClick={()=> navigate(-1)}> Back </button>

    <h6> Current Path: {pathname}</h6>
    </>
    
  )
}

export default Orders