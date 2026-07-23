"use client"

import React, { useState } from 'react'
import OrderSubmitted from '../../components/order-status/order-submitted'
import OrderConfirmed from '../../components/order-status/order-confirmed'

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  return (
    <main className="bg-gray-100 min-h-[80vh]">
        <div className="max-w-5xl mx-auto py-20">
            <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
            <div className="grid grid-cols-2 gap-14">
            </div>
            {
              isConfirmed ? (
                 <OrderConfirmed/>
              ) :  <OrderSubmitted/> 
            }
        </div>
    </main>
  )
}

export default OrderStatus
