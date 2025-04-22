"use client"
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./productCard";
// import products from "./Products";
import { useEffect } from "react";
import { fetchProducts } from "@/Redux/productsSlice";

const Produit = () => {
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector((state)=> state.products);

    useEffect(()=> {
        console.log("API URL pour test: =>", process.env.NEXT_PUBLIC_API_URL);
        dispatch(fetchProducts());
    },[dispatch]);

    if (loading) return <p>Chargement...</p>
    if (error) return <p>erreur: {error}</p>

  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {items.map((produit, index) => (
          <ProductCard produit={produit} key={index} />
        ))}
      </div>
    </>
  );
};

export default Produit;
