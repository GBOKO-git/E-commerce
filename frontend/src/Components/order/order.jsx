"use client";

import { useSelector } from "react-redux";

const Order = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calcul du total général
  const totalGeneral = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
      <h2 className="text-sm title-font text-gray-500 tracking-widest font-serif">
        AZshop
      </h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
        Produits du panier d'achat
      </h1>

      {cartItems.map((product) => {
        // Total individuel de chaque produit (prix * quantité)
        const totalProduit = product.price * product.quantity;
        return (
          <div
          key={product._id}
            className="grid grid-cols-2 border-t border-gray-200 py-2"
          >
            <img
              
              className="size-22 object-cover"
              src={product.image}
              alt={product.name}
            />
            {/* <span className="text-gray-900 pt-4">{product.name}</span> */}
            <div className="flex justify-between items-center pt-4">
              <span className="text-gray-900">{product.quantity}x</span>
              <span className="text-gray-900">{totalProduit.toFixed(2)} €</span>
            </div>
          </div>
        );
      })}

      <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Total général</span>
        <span className="ml-auto text-gray-900">
          {totalGeneral.toFixed(2)} €
        </span>
      </div>
    </div>
  );
};

export default Order;
