// import { AppContext } from "@/componentss/context";
import React, { useContext, useEffect, useState } from "react";
import cx from "classnames";
import Address from "./user-address";
import {
  handleBillingDifferentThanShipping,
  handleCreateAccount,
  handleOtherPaymentMethodCheckout,
  handleStripeCheckout,
  setStatesForCountry,
} from "@/Utils/checkout";
import CheckboxField from "./form-elements/checkbox-field";
import validateAndSanitizeCheckoutForm from "@/MyComponents/Validator/checkout";
import YourOrder from "./your-order";
import PaymentModes from "./payment-modes";

// const defaultCutomerInfo = {
//   firstName: "Imran",
//   lastName: "Javed",
//   address1: "123 Abc form",
//   address2: "Hill Road",
//   city: "Mumbai",
//   countries: "IN",
//   state: "Maharastra",
//   postcode: "221029",
//   email: "manasqureshi175@gmail.com",
//   phone: "3122761971",
//   company: "The company",
//   errors: null,
// };

const shippingMethod = [
  {
    key: 0,
    name: "Standard (3-6 business days)",
    cost: 0,
    shipping_rate_key: "shr_1OhU3yECzMeyksLqvsWQNatz",
  },
  {
    key: 1,
    name: "Priority (1-3 business days)",
    cost: 1000,
    shipping_rate_key: "shr_1OhU4kECzMeyksLqwPsygPER",
  },
];

const defaultState = [
  {
    stateCode: "AL",
    stateName: "Alabama",
  },
  {
    stateCode: "AK",
    stateName: "Alaska",
  },
  {
    stateCode: "AZ",
    stateName: "Arizona",
  },
  {
    stateCode: "AR",
    stateName: "Arkansas",
  },
  {
    stateCode: "CA",
    stateName: "California",
  },
  {
    stateCode: "CO",
    stateName: "Colorado",
  },
  {
    stateCode: "CT",
    stateName: "Connecticut",
  },
  {
    stateCode: "DE",
    stateName: "Delaware",
  },
  {
    stateCode: "DC",
    stateName: "District Of Columbia",
  },
  {
    stateCode: "FL",
    stateName: "Florida",
  },
  {
    stateCode: "GA",
    stateName: "Georgia",
  },
  {
    stateCode: "HI",
    stateName: "Hawaii",
  },
  {
    stateCode: "ID",
    stateName: "Idaho",
  },
  {
    stateCode: "IL",
    stateName: "Illinois",
  },
  {
    stateCode: "IN",
    stateName: "Indiana",
  },
  {
    stateCode: "IA",
    stateName: "Iowa",
  },
  {
    stateCode: "KS",
    stateName: "Kansas",
  },
  {
    stateCode: "KY",
    stateName: "Kentucky",
  },
  {
    stateCode: "LA",
    stateName: "Louisiana",
  },
  {
    stateCode: "ME",
    stateName: "Maine",
  },
  {
    stateCode: "MD",
    stateName: "Maryland",
  },
  {
    stateCode: "MA",
    stateName: "Massachusetts",
  },
  {
    stateCode: "MI",
    stateName: "Michigan",
  },
  {
    stateCode: "MN",
    stateName: "Minnesota",
  },
  {
    stateCode: "MS",
    stateName: "Mississippi",
  },
  {
    stateCode: "MO",
    stateName: "Missouri",
  },
  {
    stateCode: "MT",
    stateName: "Montana",
  },
  {
    stateCode: "NE",
    stateName: "Nebraska",
  },
  {
    stateCode: "NV",
    stateName: "Nevada",
  },
  {
    stateCode: "NH",
    stateName: "New Hampshire",
  },
  {
    stateCode: "NJ",
    stateName: "New Jersey",
  },
  {
    stateCode: "NM",
    stateName: "New Mexico",
  },
  {
    stateCode: "NY",
    stateName: "New York",
  },
  {
    stateCode: "NC",
    stateName: "North Carolina",
  },
  {
    stateCode: "ND",
    stateName: "North Dakota",
  },
  {
    stateCode: "OH",
    stateName: "Ohio",
  },
  {
    stateCode: "OK",
    stateName: "Oklahoma",
  },
  {
    stateCode: "OR",
    stateName: "Oregon",
  },
  {
    stateCode: "PA",
    stateName: "Pennsylvania",
  },
  {
    stateCode: "RI",
    stateName: "Rhode Island",
  },
  {
    stateCode: "SC",
    stateName: "South Carolina",
  },
  {
    stateCode: "SD",
    stateName: "South Dakota",
  },
  {
    stateCode: "TN",
    stateName: "Tennessee",
  },
  {
    stateCode: "TX",
    stateName: "Texas",
  },
  {
    stateCode: "UT",
    stateName: "Utah",
  },
  {
    stateCode: "VT",
    stateName: "Vermont",
  },
  {
    stateCode: "VA",
    stateName: "Virginia",
  },
  {
    stateCode: "WA",
    stateName: "Washington",
  },
  {
    stateCode: "WV",
    stateName: "West Virginia",
  },
  {
    stateCode: "WI",
    stateName: "Wisconsin",
  },
  {
    stateCode: "WY",
    stateName: "Wyoming",
  },
  {
    stateCode: "AA",
    stateName: "Armed Forces (AA)",
  },
  {
    stateCode: "AE",
    stateName: "Armed Forces (AE)",
  },
  {
    stateCode: "AP",
    stateName: "Armed Forces (AP)",
  },
];

const defaultCutomerInfo = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  countries: "",
  country: "US",
  state: "",
  postcode: "",
  email: "",
  phone: "",
  company: "",
  errors: null,
};

const CheckoutForm = ({ countriesData }) => {
  const { billingCountries, shippingCountries } = countriesData || {};
  const initialState = {
    billing: {
      ...defaultCutomerInfo,
    },
    shipping: {
      ...defaultCutomerInfo,
    },
    createAccount: false,
    orderNotes: "",
    billingDifferentThanShipping: false,
    paymentMethod: "stripe",
  };

  // const [ cart, setCart ] = useContext( AppContext )
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const existingCart = localStorage.getItem("forCart");
    if (existingCart) {
      const existingCartItems = JSON.parse(existingCart);
      setCart(existingCartItems);
    }
  }, []);

  const [input, setInput] = useState(initialState);
  const [requestError, setRequestError] = useState(null);
  const [theShippingStates, setTheShippingStates] = useState(defaultState);
  const [theBillingStates, setTheBillingStates] = useState(defaultState);
  const [isFetchingShippingStates, setIsFetchingShippingStates] =
    useState(false);
  const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});

  const [selectedShippingOption, setSelectedShippingOption] = useState(
    shippingMethod[0]
  );

  const handleFormSubmit = async (event) => {
    event?.preventDefault();

    /**
     * Validate Billing and Shipping Details
     *
     * Note:
     * 1. If billing is different than shipping address, only then validate billing.
     * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
     * the respective states should only be mandatory, if a country has states.
     */
    const billingValidationResult = input?.billingDifferentThanShipping
      ? validateAndSanitizeCheckoutForm(
          input?.billing,
          theBillingStates?.length
        )
      : {
          errors: null,
          isValid: true,
        };
    const shippingValidationResult = validateAndSanitizeCheckoutForm(
      input?.shipping,
      theShippingStates?.length
    );

    setInput({
      ...input,
      billing: { ...input.billing, errors: billingValidationResult.errors },
      shipping: { ...input.shipping, errors: shippingValidationResult.errors },
    });

    // If there are any errors, return.
    if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
      return null;
    }

    // For stripe payment mode, handle the strip payment and thank you.
    if ("stripe" === input.paymentMethod) {
      const createdOrderData = await handleStripeCheckout(
        input,
        cart?.cartItems,
        setRequestError,
        setCart,
        setIsOrderProcessing,
        setCreatedOrderData,
        selectedShippingOption.shipping_rate_key
      );
      return null;
    }

    // For Any other payment mode, create the order and redirect the user to payment url.
    const createdOrderData = await handleOtherPaymentMethodCheckout(
      input,
      cart?.cartItems,
      setRequestError,
      setCart,
      setIsOrderProcessing,
      setCreatedOrderData
    );

    // if (createdOrderData.paymentUrl) {
    //   console.log("hey", createdOrderData);
    //   window.location.href = createdOrderData.paymentUrl;
    // }

    setRequestError(null);
  };

  const handleOnChange = async (
    event,
    isShipping = false,
    isBillingOrShipping = false
  ) => {
    const { target } = event || {};

    if ("createAccount" === target.name) {
      handleCreateAccount(input, setInput, target);
    } else if ("billingDifferentThanShipping" === target.name) {
      handleBillingDifferentThanShipping(input, setInput, target);
    } else if ("shippingOption" === target.name) {
      setSelectedShippingOption(
        shippingMethod.find((item) => Number(item.key) === Number(target.value))
      );
    } else if (isBillingOrShipping) {
      if (isShipping) {
        await handleShippingChange(target);
      } else {
        await handleBillingChange(target);
      }
    } else {
      const newState = { ...input, [target.name]: target.value };
      setInput(newState);
    }
    console.log("input", input);
  };

  const handleShippingChange = async (target) => {
    const newState = {
      ...input,
      shipping: { ...input?.shipping, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setTheShippingStates,
      setIsFetchingShippingStates
    );
  };

  const handleBillingChange = async (target) => {
    const newState = {
      ...input,
      billing: { ...input?.billing, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setTheBillingStates,
      setIsFetchingBillingStates
    );
  };
  // const { errors, paymentMethod } = input || {};

  // useEffect(() => {
  //   if (paymentMethod === "stripe") handleFormSubmit();
  // }, [paymentMethod]);

  return (
    <>
      {cart ? (
        <form
          onSubmit={handleFormSubmit}
          id="checkout-form"
          className="woo-next-checkout-form"
        >
          <div className="grid sm:px-10 lg:grid-cols-1 lg:px-20 xl:px-32">
            <div className="max-w-3xl justify-self-center mt-10 shadow-md px-4 pt-8 lg:mt-0">
              <p className="text-2xl font-medium pb-4">Payment Details</p>
              <p className="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              {/* <form className="" onSubmit={handleFormSubmit}>
                <label
                  htmlFor="email"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Card Holder
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-holder"
                    name="card-holder"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name here"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-no"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Card Details
                </label>
                <div className="flex">
                  <div className="relative w-7/12 flex-shrink-0">
                    <input
                      type="text"
                      id="card-no"
                      name="card-no"
                      className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="credit-expiry"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    name="credit-cvc"
                    className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                  />
                </div>
                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        className="h-4 w-4 object-contain"
                        src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <select
                    type="text"
                    name="billing-state"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="State">State</option>
                  </select>
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                  />
                </div>

                  Total 
                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Shipping
                    </p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    $408.00
                  </p>
                </div>
              </form> */}

              {/* Shipping Details */}
              <div>
                <Address
                  states={theShippingStates}
                  countries={shippingCountries}
                  input={input?.shipping}
                  handleOnChange={(event) => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                />
              </div>

              {/* Shipping Method */}
              <div className="py-4">
                <p className="text-base font-medium pb-4">Shipping Method</p>
                <div className="flex flex-col gap-2">
                  {shippingMethod.map((item, index) => (
                    <label className="cursor-pointer flex justify-between">
                      <div className="flex items-center">
                        <input
                          onChange={handleOnChange}
                          type="radio"
                          checked={selectedShippingOption.key === item.key}
                          value={item.key}
                          name="shippingOption"
                        ></input>
                        <span className="ml-2">{item.name || ""}</span>
                      </div>
                      <span className="font-medium">
                        {item.cost <= 0
                          ? "Free"
                          : `$${(item.cost / 100).toFixed(2)}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Billing different than shipping"
                  containerClassNames="mb-4 pt-4"
                />
              </div>

              {/* Billing Details */}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                  <Address
                    states={theBillingStates}
                    countries={
                      billingCountries.length
                        ? billingCountries
                        : shippingCountries
                    }
                    input={input?.billing}
                    handleOnChange={(event) =>
                      handleOnChange(event, false, true)
                    }
                    isFetchingStates={isFetchingBillingStates}
                    isShipping={false}
                    isBillingOrShipping
                  />
                </div>
              ) : null}

              {/* Order & Payments*/}
              <div className="your-orders pt-4">
                {/* Order*/}
                <h2 className="text-xl font-medium mb-4">Your Order</h2>
                <YourOrder
                  cart={cart}
                  shippingCost={(selectedShippingOption.cost / 100).toFixed(2)}
                />
                {/* <YourOrder/> */}

                {/*Payment*/}
                {/* <h2 className="text-xl font-medium mb-4">
                  Select your mode of payment
                </h2> */}
                <PaymentModes
                  input={input}
                  handleOnChange={handleOnChange}
                  onClick={handleFormSubmit}
                  handleFormSubmit={handleFormSubmit}
                />

                {/* <button type="submit">Place Order</button> */}

                {/* Checkout Loading*/}
                {isOrderProcessing && <p>Processing Order...</p>}
                {/* {requestError && (
                  <p>Error : {requestError} :( Please try again</p>
                )} */}
              </div>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default CheckoutForm;
