import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="content-section w-[55%] bg-customBlue">
        <div className="p-60 flex flex-col gap-5 items-start">
          <p className="text-yellow-300 text-3xl">Hello, I'm</p>
          <h1 className="text-white text-[100px] font-bold leading-[95px]">
            Mubeen Mehmood
          </h1>
          <p className="text-gray-400 text-4xl font-light">Web Developer</p>
          <button className="text-black bg-customYellow py-2 px-6 rounded-full">
            <Link href="https://github.com/mubeendev3" target="_blank">
              Checkout My Github&apos;
            </Link>
          </button>
        </div>
      </div>
      <div className="image-section w-[45%] bg-customBlue flex items-center justify-center">
        <Image
          src="/dp.jpg"
          alt="Profile Picture"
          width={3024}
          height={4032}
          className="max-h-full max-w-full object-cover"
        />
      </div>
    </div>
  );
};

export default HomePage;
