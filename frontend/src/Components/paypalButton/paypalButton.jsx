"use client"
// src/components/paypalButton.jsx
// import { createContext } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AbqrW4jWQCpoc_f_ZC_rwLDCvAHpTWu6YDkOHqrgBiStsEC3sy-oe0IAsZp-7nPxUPZbsQRxWeSlRxyN" }}>
      <div>
        <h3>Effectuer un paiement</h3>
        <PayPalButtons
          style={{
            layout: "vertical",
            shape: "rect",
            color: "blue",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Le montant du paiement
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                "Paiement réussi par " + details.payer.name.given_name
              );
            });
          }}
        />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
