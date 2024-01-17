import Error from "./errors";
import paypalIcon from "public/assets/PayPal.svg";

const PaymentModes = ({ input, handleOnChange, onClick }) => {
  const { errors, paymentMethod } = input || {};

  return (
    <div className="mt-3">
      <Error errors={errors} fieldName={"paymentMethod"} />

      {/*Pay with Paypal*/}
      <div className="flex items-center">
        <label className="form-check-label">
          <div className="form-check woo-next-payment-input-container mt-2">
            <img src="../assets/PayPal.svg" alt="" className="h-16 w-24" />
            <input
              onChange={handleOnChange}
              value="paypal"
              className="form-check-input mr-3 opacity-0"
              name="paymentMethod"
              type="radio"
              checked={"paypal" === paymentMethod}
            />
            <span className="woo-next-payment-content opacity-0">
              Pay with Paypal
            </span>
          </div>
        </label>

        {/*Pay with Stripe*/}
        <label className="form-check-label -ml-4">
          <div className="form-check woo-next-payment-input-container mt-2">
            <img src="../assets/ApplePay.svg" alt="" className="h-16 w-24" />
            <input
              onChange={handleOnChange}
              value="cod"
              className="form-check-input mr-3 opacity-0"
              name="paymentMethod"
              type="radio"
              checked={"cod" === paymentMethod}
            />
            <span className="woo-next-payment-content opacity-0">
              Pay with Apple pay
            </span>
          </div>
        </label>
        <label className="form-check-label -ml-10">
          <div
            className="form-check woo-next-payment-input-container mt-2 cursor-pointer"
            onClick={onClick}
          >
            <img src="../assets/stripe.png" alt="" className="h-16 w-24" />

            <input
              onChange={handleOnChange}
              value="stripe"
              className="form-check-input mr-3 opacity-0"
              name="paymentMethod"
              type="radio"
              checked={"stripe" === paymentMethod}
            />
            <span className="woo-next-payment-content opacity-0">Stripe</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentModes;
