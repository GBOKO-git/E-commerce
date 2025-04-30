import Order from "@/Components/order/order";
import ShippingAddress from "@/Components/ShipingAddress/ShipingAddress";

const Shopping = () => {
  return (
    <>
      <div className="min-h-screen place-content-center place-items-center mt-15 bg-slate-50">
        <h1 className="h-12 w-full text-center">Passer votre commande</h1>

        <section className="text-gray-600 body-font overflow-hidden md:w-5xl bg-slate-50">
            <div className="lg:w-5/5 mx-auto grid md:grid-cols-2  p-5">
            <div className="w-full">
            <Order/>
            </div>
            <div className="w-full">
            <ShippingAddress/>
            </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Shopping;
