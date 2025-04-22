
"use client"
import Detail from "@/Components/Detail";
import { useParams } from "next/navigation";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.id;

  
  return (
    <>
        <Detail productId={productId} />
      
    </>
  );
};

export default ProductDetail;
