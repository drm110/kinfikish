import Error from "./errors";
import { isEmpty, map } from "lodash";
import Abbr from "./form-elements/abbr";
// import ArrowDown from "../icons/ArrowDown";

const CountrySelection = ({ input, handleOnChange, countries, isShipping }) => {
  const { country, errors } = input || {};

  function isStripeSupported(countryCode) {
    // Implement logic to check if the country is supported by Stripe
    // For example, you can maintain a list of supported country codes
    const supportedCountryCodes = [
      "US",
      "CA",
      "GB",
      "AE",
      "AU",
      "AT",
      "BE",
      "BR",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GH",
      "GI",
      "GR",
      "HK",
      "HU",
      "IN",
      "ID",
      "IE",
      "IT",
      "JP",
      "KE",
      "LV",
      "LI",
      "LT",
      "LU",
      "MY",
      "MT",
      "MX",
      "NL",
      "NZ",
      "NG",
      "NO",
      "PL",
      "PT",
      "RO",
      "SG",
      "SK",
      "SI",
      "ZA",
      "ES",
      "SE",
      "CH",
      "TH" /* Add more country codes */,
    ];
    return supportedCountryCodes.includes(countryCode);
  }

  const inputId = `country-${isShipping ? "shipping" : "billing"}`;

  return (
    <div className="mb-3">
      <label className="leading-7 text-sm text-gray-700" htmlFor={inputId}>
        Country
        <Abbr required />
      </label>
      <div className="relative w-full border-none">
        <select
          onChange={handleOnChange}
          value={country}
          name="country"
          className="bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
          id={inputId}
        >
          <option value="">Select a country...</option>
          {!isEmpty(countries) &&
            countries
              .filter((country) => isStripeSupported(country.countryCode)) // Filter countries supported by Stripe
              .map((country) => (
                <option
                  key={country.countryCode}
                  data-countrycode={country.countryCode}
                  value={country.countryCode}
                >
                  {country.countryName}
                </option>
              ))}
        </select>

        <span
          className="absolute right-0 mr-1 text-gray-500"
          style={{ top: "25%" }}
        >
          {/* <ArrowDown width={24} height={24} className="fill-current"/> */}
        </span>
      </div>
      <Error errors={errors} fieldName={"country"} />
    </div>
  );
};

export default CountrySelection;
