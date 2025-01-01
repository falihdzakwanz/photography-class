import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col px-6 md:px-10 lg:px-14">
      <div className="w-full">
        <Image
          src={"https://placehold.co/600x400"}
          alt="Image Header"
          width={600}
          height={300}
          className="rounded-md overflow-hidden object-cover object-center min-w-full md:max-h-[400px] lg:max-h-[600px]"
        />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl my-4 md:my-8 md:text-4xl lg:text-6xl">About Us</h1>
        <div className="text-justify flex flex-col gap-4 md:text-xl lg:text-2xl">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam quidem voluptatem, aliquam quod accusantium soluta earum commodi, alias provident cum excepturi mollitia eum. Voluptatibus aliquid nostrum a laboriosam qui. Quasi officiis dicta ea, aperiam cupiditate facere magnam sequi, excepturi repudiandae amet ipsa dolore dolorum tempora libero suscipit facilis est. Eligendi ullam deserunt dolorum similique omnis numquam cum tenetur temporibus neque est amet cumque, sapiente ad necessitatibus! Labore architecto eaque reprehenderit culpa voluptas sed aspernatur tempore error blanditiis accusamus debitis quos natus cum hic neque provident distinctio possimus, ratione voluptatem enim quas ducimus. Nostrum maxime error quos? Quis, nostrum eum?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam quidem voluptatem, aliquam quod accusantium soluta earum commodi, alias provident cum excepturi mollitia eum. Voluptatibus aliquid nostrum a laboriosam qui. Quasi officiis dicta ea, aperiam cupiditate facere magnam sequi, excepturi repudiandae amet ipsa dolore dolorum tempora libero suscipit facilis est. Eligendi ullam deserunt dolorum similique omnis numquam cum tenetur temporibus neque est amet cumque, sapiente ad necessitatibus! Labore architecto eaque reprehenderit culpa voluptas sed aspernatur tempore error blanditiis accusamus debitis quos natus cum hic neque provident distinctio possimus, ratione voluptatem enim quas ducimus. Nostrum maxime error quos? Quis, nostrum eum?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam quidem voluptatem, aliquam quod accusantium soluta earum commodi, alias provident cum excepturi mollitia eum. Voluptatibus aliquid nostrum a laboriosam qui. Quasi officiis dicta ea, aperiam cupiditate facere magnam sequi, excepturi repudiandae amet ipsa dolore dolorum tempora libero suscipit facilis est. Eligendi ullam deserunt dolorum similique omnis numquam cum tenetur temporibus neque est amet cumque, sapiente ad necessitatibus! Labore architecto eaque reprehenderit culpa voluptas sed aspernatur tempore error blanditiis accusamus debitis quos natus cum hic neque provident distinctio possimus, ratione voluptatem enim quas ducimus. Nostrum maxime error quos? Quis, nostrum eum?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
