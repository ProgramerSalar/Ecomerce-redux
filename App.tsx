import { StripeProvider } from "@stripe/stripe-react-native";
import React from 'react';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


const stripeKey = "pk_test_51LyzylSBCIORAoq3XfOgUuXmYRoIBOcGa46q4LhxN2E6sAFfycVBupE34XdDfjgaTP4euUgIop1Pr8mKhuJvC3PR00Ebp2Ts5g"


export const App = () => {
  return(
    <StripeProvider 
    threeDSecureParams={{
      backgroundColor: "#fff",
      timeout: 5,
    }}
    merchantIdentifier="6-pack-ecom.com"
    publishableKey={stripeKey}
    >
  <Provider store={store}>
    <Main />

    </Provider>
    </StripeProvider>

  
  )
  
}
