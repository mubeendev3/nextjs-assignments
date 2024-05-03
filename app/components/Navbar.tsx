import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="wrapper flex backdrop-blur-sm bg-customBlue h-[80px] items-center w-full justify-between font-semibold text-white shadow-xl">
        <div className="pl-10 tracking-wider text-2xl font-normal">
          <span className="text-yellow-500 font-black">Mubeen</span> Assignments
        </div>
        <div>
          <ul className="flex gap-10 pr-20">
            <li>
              <Link href="/">Home </Link>
            </li>
            <li>
              <Link href="/assignment-1">Assignment 1</Link>
            </li>
            <li>
              <Link href="/assignment-2">Assignment 2</Link>
            </li>
            <li>
              <Link href="/assignment-3">Assignment 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
