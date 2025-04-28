import axios from "axios";

const SHIPPING_API = process.env.NEXT_PUBLIC_API_URL;

const postShippingAddress = async (shippingAddress, cartItems) => {
  try {
    const token = localStorage.getItem("token");
    // const token = user.token;
    const shipData = await axios.post(
      `${SHIPPING_API}/order`,
      {
        items: cartItems, // à remplir plus tard
        shippingAddress,
        toxPrice: 0,
        shippingPrice: 0,
        totalPrice: 0,
        paymentMethod: "PayPal",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert("✅ Commande passée avec succès");
    console.log("✅ Commande passée avec succès", shipData.data);
    return shipData.data;
  } catch (error) {
    console.log(
      "❌ Erreur de commande",
      error.response?.data?.message || error.message
    );
    alert("❌ information insuffisant");

    throw error;
  }
};

export default postShippingAddress;
