import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="flex items-center justfiy-center min-w-screen min-h-screen max-h-screen max-w-screen bg-primary text-secondary">
      <div className="flex flex-col items-center justify-center mx-auto gap-10">
        <h1 className="lg:text-6xl font-bold mt-8">Portfolio</h1>
        <div className="flex flex-row justify-center items-center lg:gap-24">
          <Link href={""} className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"https://placehold.co/400x550"}
              width={300}
              height={500}
              alt="Andiyan Lutfi"
              className="rounded-md shadow-md shadow-secondary overflow-hidden"
            />
            <h2 className="lg:text-4xl">Andiyan Lutfi</h2>
          </Link>

          <Link href={""} className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"https://placehold.co/400x550"}
              width={300}
              height={500}
              alt="Andiyan Lutfi"
              className="rounded-md shadow-md shadow-secondary overflow-hidden"
            />
            <h2 className="lg:text-4xl">Andiyan Lutfi</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
