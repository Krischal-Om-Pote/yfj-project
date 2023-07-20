// import React, { useEffect } from 'react';

// const EsewaComponent = () => {
//   const handlePayment = () => {
//     const path = 'https://uat.esewa.com.np/epay/main';
//     const params = {
//       amt: 100,
//       psc: 0,
//       pdc: 0,
//       txAmt: 0,
//       tAmt: 100,
//       pid: 'ee2c3ca1-696b-4cc5-a6be-2c40d929d453',
//       scd: 'EPAYTEST',
//       su: 'http://merchant.com.np/page/esewa_payment_success',
//       fu: 'http://merchant.com.np/page/esewa_payment_failed',
//     };

//     const form = document.createElement('form');
//     form.setAttribute('method', 'POST');
//     form.setAttribute('action', path);

//     for (let key in params) {
//       const hiddenField = document.createElement('input');
//       hiddenField.setAttribute('type', 'hidden');
//       hiddenField.setAttribute('name', key);
//       hiddenField.setAttribute('value', params[key]);
//       form.appendChild(hiddenField);
//     }

//     document.body.appendChild(form);
//     form.submit();
//   };

//   useEffect(() => {
//     handlePayment();
//   }, []);

//   return (
//     <form action="https://uat.esewa.com.np/epay/main" method="POST">
//       <input value="100" name="tAmt" type="hidden" />
//       <input value="90" name="amt" type="hidden" />
//       <input value="5" name="txAmt" type="hidden" />
//       <input value="2" name="psc" type="hidden" />
//       <input value="3" name="pdc" type="hidden" />
//       <input value="EPAYTEST" name="scd" type="hidden" />
//       <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden" />
//       <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su" />
//       <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu" />
//       <input value="Submit" type="submit" />
//     </form>
//   );
// };

// export default EsewaComponent;

import React, { useState } from 'react';


const EsewaComponent = () => {
  const [totalAmount, setTotalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const path = 'https://uat.esewa.com.np/epay/main';
    const params = {
      amt: totalAmount,//Amount of product or item or ticket etc
      psc: 0, //Service charge by merchant on product or item or ticket etc
      pdc: 0,//Delivery charge by merchant on product or item or ticket etc
      txAmt: 0,//Tax amount on product or item or ticket etc
      tAmt: totalAmount,//Total payment amount including tax, service and deliver charge. [i.e tAmt = amt + txAmt + psc + tAmt]
      pid: `ee2c3ca1-696b-4cc5-a6be-2c40d929d453-${Math.floor(Math.random() *99999)}`,
      scd: 'EPAYTEST',
      su: 'http://merchant.com.np/page/esewa_payment_success',
      fu: 'http://merchant.com.np/page/esewa_payment_failed',
    };

    const form = document.createElement('form');
    form.setAttribute('method', 'POST');
    form.setAttribute('action', path);

    for (let key in params) {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();

  
  };

  const handleChange = (e) => {
    setTotalAmount(e.target.value);
  };

  return (
    <>
      <form action="https://uat.esewa.com.np/epay/transrec" method="POST" onSubmit={handleSubmit}>
        <input value={totalAmount} name="amt" type="hidden" />
        <input value={totalAmount} name="tAmt" type="hidden" />
        <input value="5" name="txAmt" type="hidden" />
        <input value="2" name="psc" type="hidden" />
        <input value="3" name="pdc" type="hidden" />
        <input value="epay_payment" name="scd" type="hidden" />
        <input value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453" name="pid" type="hidden" />
        <input value="http://merchant.com.np/page/esewa_payment_success?q=su" type="hidden" name="su" />
        <input value="http://merchant.com.np/page/esewa_payment_failed?q=fu" type="hidden" name="fu" />
        <div>
        <label>Total Amount:</label>
        <input type="number" value={totalAmount} onChange={handleChange} />
      </div>
      <input type="submit" value="Pay with eSewa" />
      </form>
  
    </>
  );
};

export default EsewaComponent;



