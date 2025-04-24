import { LeftImage } from "./Images";


const Left = () => {
  
  return (
    <>
    {
      LeftImage.map((image, index) => (
        <div key={index} className="">
        <div className="">
          <a href="#">
            <img
              className="w-full h-full"
              src={image.Image}
              alt={image.name}
            />
          </a>
        </div>
      </div>
      ))
    }
      
    </>
  );
};

export default Left;
