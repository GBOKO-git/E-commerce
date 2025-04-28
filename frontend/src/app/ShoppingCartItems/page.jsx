const { default: ShoppingCart } = require("@/Components/ShoppingCart")


const ShoppingCartRoute = () => {
    return(
        <>
        <div className="min-h-screen  bg-[url('/logo/ecme.png')] bg-cover bg-center">
        <ShoppingCart/>
        </div>
        </>
    )
}
export default ShoppingCartRoute;