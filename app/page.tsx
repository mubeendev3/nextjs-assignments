import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <div className="content-section w-[55%] bg-customBlue ">
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <p className="text-yellow-500 text-3xl pb-4">Hello, I'm</p>
            <h1 className="text-white text-[100px] font-bold leading-[95px] pb-4">
              Mubeen
            </h1>
            <h1 className="text-white text-[100px] font-bold leading-[95px] pb-4">
              Mehmood
            </h1>
            <p className="text-gray-400 text-4xl font-light pb-4">
              Web Developer
            </p>
            <button className="text-black bg-yellow-500 py-2 px-6 rounded-full mt-5 font-medium">
              <Link href="https://github.com/mubeendev3" target="_blank">
                Checkout My Github&apos;
              </Link>
            </button>
          </div>
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
