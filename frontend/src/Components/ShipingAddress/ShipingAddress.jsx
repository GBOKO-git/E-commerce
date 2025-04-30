// "use client"

// import { useDispatch, useSelector } from "react-redux";
// // import PaypalButton from "../paypalButton/paypalButton";
// import { setShippingAddress } from "@/Redux/shipingAddress/shippingAddressSlice";
// import postShippingAddress from "@/Redux/shipingAddress/shippingService";

// const ShippingAddress = () => {
//   const dispatch = useDispatch();
//   const {shippingAddress} = useSelector((state) => state.shipping);
//   const {cartItems} = useSelector((state) => state.cart);

 

//   const handleChange = (e) => {
//     const {name, value} = e.target;
//     dispatch(setShippingAddress({
//       ...shippingAddress,
//         [name]: value,
//     }));
//   };
    
// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log("cartItem non vide", cartItems)
//   postShippingAddress(shippingAddress, cartItems);
// }

//   return (
//     <>
//       <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0">
//         <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
//           information de l'acheteur
//         </h2>
        
//         <form onSubmit={handleSubmit}>
//         <div className="relative mb-4">
//           <label htmlFor="address" className="leading-7 text-sm text-gray-600">
//             Address
//           </label>
//           <input
//             value={shippingAddress.address}
//             onChange={handleChange}
//             type="text"
//             id="address"
//             name="address"
//             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <div className="relative mb-4">
//           <label htmlFor="postCode" className="leading-7 text-sm text-gray-600">
//             code postal
//           </label>
//           <input
//             value={shippingAddress.postCode}
//             onChange={handleChange}
//             type="text"
//             id="postCode"
//             name="postCode"
//             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <div className="relative mb-4">
//           <label htmlFor="country" className="leading-7 text-sm text-gray-600">
//           Pays
//           </label>
//           <input
//           value={shippingAddress.country}
//           onChange={handleChange}
//             type="text"
//             id="country"
//             name="country"
//             className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//           />
//         </div>
//         <button type="submit" className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">
//           Sauvegarder
//         </button>
//         </form>
       
//       </div>
//     </>
//   );
// };

// export default ShippingAddress;

"use client";

import { useDispatch, useSelector } from "react-redux";
import { setShippingAddress } from "@/Redux/shipingAddress/shippingAddressSlice";
import postShippingAddress from "@/Redux/shipingAddress/shippingService";
import PayPalButton from "../paypalButton/paypalButton";
import { useState, useEffect } from "react";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.shipping);
  const { cartItems } = useSelector((state) => state.cart);

  const [isFormValid, setIsFormValid] = useState(false); // État pour la validité du formulaire
  const [showPaypalButton, setShowPaypalButton] = useState(false); // État pour afficher PayPal

  // Fonction qui vérifie si le formulaire est valide
  const validateForm = () => {
    const { address, postCode, country } = shippingAddress;
    if (address && postCode && country) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    validateForm(); // Re-vérifier la validité à chaque changement d'adresse
  }, [shippingAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      setShippingAddress({
        ...shippingAddress,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cartItem non vide", cartItems);
    postShippingAddress(shippingAddress, cartItems);
    if (isFormValid) {
      setShowPaypalButton(true); // Afficher PayPal si le formulaire est valide
    }
  };

  return (
    <>
      <div className=" flex flex-col md:ml-auto w-full md:p-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Information de l'acheteur
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">
              Adresse
            </label>
            <input
              required
              value={shippingAddress.address}
              onChange={handleChange}
              type="text"
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="postCode" className="leading-7 text-sm text-gray-600">
              Code postal
            </label>
            <input
              required
              value={shippingAddress.postCode}
              onChange={handleChange}
              type="text"
              id="postCode"
              name="postCode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="country" className="leading-7 text-sm text-gray-600">
              Pays
            </label>
            <input
              required
              value={shippingAddress.country}
              onChange={handleChange}
              type="text"
              id="country"
              name="country"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            disabled={!isFormValid} // Désactiver le bouton si le formulaire n'est pas valide
            className="w-full bg-indigo-600 text-white p-2 rounded-md"
          >
            Valider l'adresse
          </button>
        </form>

        {/* Afficher PayPal uniquement lorsque le formulaire est valide */}
        {showPaypalButton && isFormValid && <PayPalButton />}
      </div>
    </>
  );
};

export default ShippingAddress;
