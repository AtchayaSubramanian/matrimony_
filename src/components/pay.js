import React, { useState } from 'react';

import'../css/pay.css';
import { Alert } from 'react-bootstrap';
import ButtonAppBar from './nav1';
import NavigationBar from './nav';
function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  // const handleSubmit = () => {
  //   Alert("Payment Sucessful");
  // };

  return (
    <div>
      <div>
        <NavigationBar/>
      </div>
        <div className='mean'>
      <div>
    <form className='re' >
      <label className='label1'>
        Card Number:
        <input
         className='in'
          type="text"
          
        />
      </label>
      <label className='label1'>
        Expiry Date:
        <input
         className='in'
          type="text"
         
        />
      </label>
      <label className='label1'>
        CVV:
        <input
        className='in'
          type="text"
         
        />
      </label>
      <button className='but9'>Submit Payment</button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default PaymentForm;
