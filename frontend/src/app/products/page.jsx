import { LeftImage } from "@/Components/Images";

const Products = () => {
  return (
    <>
      {/* <div className="w-screen h-screen">
        <h1>Bienvenue sur notre site de produits agricoles</h1>

        <div className="min-h-screen  flex-wrap text-2xl text-black ">
          {LeftImage.map((image, index) => (
            <img
              key={index}
              className="flex"
              src={image.Image}
              alt={image.name}
              width={400}
              height={400}
            ></img>
          ))}
        </div>
      </div> */}

      <h1 className=" mt-10 md:mt-15 text-center text-3xl font-bold py-4 bg-amber-100 text-gray-800 rounded-md shadow-md fixed top-0 z-10 w-full">
        Quelques produits de chez nous
      </h1>

      <div className="min-h-screen pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {LeftImage.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={image.Image}
              alt={image.name}
              width={400}
              height={400}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-4 text-lg font-semibold text-gray-800">
              {image.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
