import Image from "next/image";

const Workshops = () => {
  return (
    <div className="bg-primary lg:pt-24 flex flex-col text-secondary min-h-screen min-w-screen">
      <h1 className="text-6xl font-bold text-center">Workshops Of 2025</h1>
      <div className="flex lg:flex-row justify-center items-center mt-10 flex-wrap">
        <div className="flex flex-col justify-center items-center px-8 py-4 gap-4">
          <Image
            src={"https://placehold.co/600x400"}
            width={560}
            height={385}
            alt="Workshops"
            className="rounded-lg overflow-hidden"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold lg:text-3xl uppercase">
              2025 lOS POLOS HERMANOS
            </h2>
            <h3 className="text-gray-500 lg:text-lg">
              Sparrow, squirrel, Robin, butterfly, Hummingbird
            </h3>
          </div>
          <div className="lg:text-lg">
            <p>Session 1 | Jan 3 - 12, 2025 - SOLD OUT </p>
            <p>Session 2 | Jan 3 - 12, 2025 - SOLD OUT </p>
          </div>
          <button
            type="button"
            className="uppercase bg-secondary py-2 px-4 rounded-md text-primary font-bold lg:text-lg"
          >
            FULL iNFO cLICK HERE
          </button>
        </div>
        <div className="flex flex-col justify-center items-center px-8 py-4 gap-4">
          <Image
            src={"https://placehold.co/600x400"}
            width={560}
            height={385}
            alt="Workshops"
            className="rounded-lg overflow-hidden"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold lg:text-3xl uppercase">
              2025 lOS POLOS HERMANOS
            </h2>
            <h3 className="text-gray-500 lg:text-lg">
              Sparrow, squirrel, Robin, butterfly, Hummingbird
            </h3>
          </div>
          <div className="lg:text-lg">
            <p>Session 1 | Jan 3 - 12, 2025 - SOLD OUT </p>
            <p>Session 2 | Jan 3 - 12, 2025 - SOLD OUT </p>
          </div>
          <button
            type="button"
            className="uppercase bg-secondary py-2 px-4 rounded-md text-primary font-bold lg:text-lg"
          >
            FULL iNFO cLICK HERE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
