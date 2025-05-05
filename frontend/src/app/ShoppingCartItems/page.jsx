import Produit from "@/Components/accueil/Produit";

const { default: ShoppingCart } = require("@/Components/ShoppingCart")


const ShoppingCartRoute = () => {
    return(
        <>
        <div className="min-h-screen  bg-[url('/logo/ecme.png')] bg-cover bg-center pt-20 pb-5">
        <ShoppingCart/>
        <Produit/>
        </div>
        </>
    )
}
export default ShoppingCartRoute;