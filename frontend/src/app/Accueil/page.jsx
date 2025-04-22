import Left from "@/Components/Left";
import Produit from "@/Components/Produit";
import Rigth from "@/Components/Rigth";

const Index = () => {
  return (
    <>
      <div className="min-h-dvh w-full  grid grid-cols-6 bg-blue-900/10 mt-20">
        <div className="bg-slate-300 col-span-1 h-full grid grid-cols-1 items-center">
          <Left />
        </div>
        <div className="bg-gray-50 col-span-4 h-full pt-15 place-items-center items-center pb-4">
          <Produit />
        </div>
        <div className="bg-slate-300 col-span-1 h-full grid items-center">
          <Rigth/>
        </div>
      </div>
    </>
  );
};

export default Index;
