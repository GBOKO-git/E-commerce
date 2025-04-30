"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart, clearCart } from "@/Redux/cartSlice";
import Link from "next/link";
import { setUserFromStorage } from "@/Redux/user/userSlice";

const ShoppingCart = () => {
  const [open, setOpen] = useState(true);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);  // Utilise useSelector pour récupérer l'utilisateur du store Redux


  const Subtotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Vérifie si nous sommes côté client
      const user = JSON.parse(localStorage.getItem("user"));
      const token = localStorage.getItem("token");

      if (user && token) {
        dispatch(setUserFromStorage({ user, token }));
      }
    }
  }, [dispatch]); // Ce useEffect ne s'exécutera qu'une fois après le premier rendu côté client

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 "
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl pt-8">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                    Panier
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Fermer le panneau</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((product) => (
                          <li key={product._id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.name}
                                src={product.image}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <span>{product.name}</span>
                                  </h3>
                                  <p className="ml-4">{product.price}</p>
                                </div>
                            
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  quantité {product.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    onClick={() =>
                                      dispatch(removeToCart(product._id))
                                    }
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 hover:cursor-pointer"
                                  >
                                    supprimer
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Prix total</p>
                    <p>{Subtotal.toLocaleString()} CFA</p>
                  </div>
                 
                  <div className="flex">
                    <button
                      onClick={() => dispatch(clearCart())}
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      vider le panier
                    </button>
                  </div>
                  <div className="mt-6">
                    {user ? (
                      <Link
                        href="/ShoppingOrder"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                      >
                        Passer la commande
                      </Link>
                    ) : (
                      <Link
                        disable="true"
                        href="/Login"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                      >
                        Veillez vous connecter
                      </Link>
                    )}
                  </div>
                  {/* <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div> */}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ShoppingCart;
