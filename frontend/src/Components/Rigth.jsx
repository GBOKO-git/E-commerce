import { RigthImage } from "./Images";

const Rigth = () => {
  return (
    <>
    {RigthImage.map((image,index) => (
        <div key={index}>
        <div>
            <a href="#">
              <img
                className=" w-full h-full"
                src={image.Image}
                alt={image.name}
              />
            </a>
          </div>
          </div>
    ) )}
    </>
  );
};

export default Rigth;
