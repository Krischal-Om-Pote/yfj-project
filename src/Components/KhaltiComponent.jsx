import React, { useEffect, useState } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import myKey from './khaltiKey';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const KhaltiComponent = () => {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const config = {
      publicKey: 'test_public_key_3c1071697e8a45a78cd683cc07c9f276',
      productIdentity: '1234567890',
      productName: 'YFJ (Your Function Junction)',
      productUrl: 'http://localhost:3000',
      paymentPreference: [
        'KHALTI',
        'EBANKING',
        'MOBILE_BANKING',
        'CONNECT_IPS',
        'SCT',
      ],
      eventHandler: {
        onSuccess: (payload) => {
          // hit merchant API for initiating verification
          console.log(payload);
          let data = {
            token: payload.token,
            amount: payload.amount,
          };
          axios.post(`https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${myKey.secretKey}`)
          .then(response => {
            console.log(response.data);
            alert('Response nice', response.data);
          })
          .catch(error => {
            console.log(error);
            toast.success("Successful Payment", {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        },
        onError: (error) => {
          console.log(error);
        },
        onClose: () => {
          console.log('Widget is closing');
        },
      },
    };

    const checkout = new KhaltiCheckout(config);

    const handlePaymentButtonClick = () => {
        checkout.show({ amount: 10000});
    };

    const paymentButton = document.getElementById('payment-button');
    paymentButton.addEventListener('click', handlePaymentButtonClick);

    return () => {
      // Clean up the event listener
      paymentButton.removeEventListener('click', handlePaymentButtonClick);
    };
  }, [amount]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div>
       <ToastContainer />
      {/* Place this where you need the payment button */}
      {/* <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      /> */}
      <button id="payment-button">Pay with Khalti</button>
      {/* Place this where you need the payment button */}
    </div>
  );
};

export default KhaltiComponent;
