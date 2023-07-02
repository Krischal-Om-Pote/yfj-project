import React, { useEffect, useState } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';

const KhaltiComponent = () => {
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const config = {
      publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
      productIdentity: '1234567890',
      productName: 'Dragon',
      productUrl: 'http://gameofthrones.wikia.com/wiki/Dragons',
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
      const parsedAmount = parseInt(amount) * 100;;
      if (!isNaN(parsedAmount) && parsedAmount >= 1000) {
        checkout.show({ amount: parsedAmount });
        console.log(`Entered amount: ${parsedAmount}`);
      } else {
        console.log('Invalid amount');
      }
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
      {/* Place this where you need the payment button */}
      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />
      <button id="payment-button">Pay with Khalti</button>
      {/* Place this where you need the payment button */}
    </div>
  );
};

export default KhaltiComponent;
