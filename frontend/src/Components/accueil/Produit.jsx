"use client";
import { useDispatch, useSelector } from "react-redux";
// import products from "./Products";
import { useEffect } from "react";
import { fetchProducts } from "@/Redux/productsSlice";
import { ProductCard } from "../productCard";

const Produit = () => {
  const dispatch = useDispatch();
  const { items, loading, error, searchQuery } = useSelector(
    (state) => state.products
  );

  // Filtrer les produits en fonction de la searchQuery
  const filteredProduct = items.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    console.log("API URL pour test: =>", process.env.NEXT_PUBLIC_API_URL);
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>erreur: {error}</p>;

  return (
    <>
      <div className="flex flex-wrap gap-3 items-center justify-center ">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((produit, index) => (
            <ProductCard produit={produit} key={index} />
          ))
        ) : (
          <h1 className="text-4xl font-serif min-h-screen text-yellow-600">Aucun produit trouvé</h1>
        )}
      </div>
    </>
  );
};

export default Produit;
