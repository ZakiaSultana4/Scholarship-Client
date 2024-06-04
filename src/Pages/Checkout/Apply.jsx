import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import CheckoutPaymentForm  from "./CheckoutPaymentForm"
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);
const Apply = () => {
  const scholar = useLoaderData();
console.log(scholar);
    const [customerActive, setCustomerActive] = useState(false);
  return (
    <div className=" lg:col-span-3 relative min-h-[700px] max-w-7xl mx-auto lg:px-0 md:px-5 px-3  py-5">
      <h1 className=" font-medium text-lg mb-2">
        To Apply the Scholarship at first Payment the Application fee
      </h1>
      <Elements stripe={stripePromise}>
        <CheckoutPaymentForm customerActive={customerActive} scholar={scholar} />
      </Elements>
    </div>
  )
}

export default Apply