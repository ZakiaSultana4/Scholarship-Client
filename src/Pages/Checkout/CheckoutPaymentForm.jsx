import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import {
  createPaymentIntent,
} from "../../api/bookingscholarship";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const CheckoutPaymentForm = ({ customerActive, scholar }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // create payment intent
    if (scholar.fee) {
      createPaymentIntent({ fee: scholar.fee }).then((data) => {
        setClientSecret(data.clientSecret);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error: ", error);
      setError(error.message);
      return;
    } else {
      console.log(paymentMethod);
      setError("");
    }

    // Ekhane taka katbe
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        ...scholar,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      try {
        // save payment information to the server
        const { data } = await axios.post('https://scholarship-two.vercel.app/scholarship', paymentInfo)
        console.log(data)
        // await saveBookingInfo(paymentInfo);
        const text = `Scolarship Applied Successful! ${paymentIntent.id}`;
        toast.success(text);
          navigate(`/successApply/${scholar._id}`)
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`border absolute  w-full h-[300px] ${
        !customerActive ? "w-full left-0" : "top-[30%] -left-[130%] -z-10"
      } duration-[.5s]  delay-150`}
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
        className="px-2 py-5 border"
      ></CardElement>

      <button className="w-full py-2 mt-2 text-white bg-[#004C3F]" type="submit">
        Pay
      </button>
    </form>
  );
};

export default CheckoutPaymentForm;
