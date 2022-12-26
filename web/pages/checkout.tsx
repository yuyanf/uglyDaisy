import React from "react";

const Checkout = () => {
  return (
    <div className="bg-white m-2 shadow-md rounded-md p-5">
      <section>
        <fieldset>
          <legend className="text-xl mb-3 font-medium tracking-wide">
            Shipping information
          </legend>

          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </fieldset>
      </section>
    </div>
  );
};

export default Checkout;
