import React, { createContext, useState } from 'react';


const PaymentContext = createContext({});

export const PaymentProvider = ({children}) => {
    const [ payment, setPayment ] = useState({});

    const value = {
        payment, setPayment
    }

    return (
       <PaymentContext.Provider value={value}>
       	{children} 
       </PaymentContext.Provider>
    );
};

export default PaymentContext;

