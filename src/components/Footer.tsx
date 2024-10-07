import { AiOutlineSend } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#303030]">
      <div className="p-12">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center md:text-left">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-2xl font-extrabold uppercase block mb-4">
              SR<span className="text-primary">-DTU</span>
            </Link>
            <p className="max-w-xs mx-auto md:mx-0 text-lg">
              Pioneering innovation through robotics and AI. Join us in shaping
              the future of technology.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-bold uppercase mb-3 text-primary">
              Explore
            </h5>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:opacity-50">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold uppercase mb-3 text-primary">
              Resources
            </h5>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:opacity-50">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:opacity-50">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold uppercase mb-3 text-primary">
              Newsletter
            </h5>
            <p className="max-w-xs mx-auto md:mx-0">
              Stay updated on the latest in robotics and AI. Subscribe now!
            </p>

            <form className="mt-4">
              <div className="flex items-stretch focus-within:shadow-lg transition duration-150">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 p-3 bg-transparent border-white/20 border-2 rounded-sm"
                />
                <button className="px-4 bg-black/40 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform rounded-sm">
                  <AiOutlineSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-primary py-2">
        <div className="container text-center flex flex-col md:flex-row justify-around items-center gap-2">
          <p className="">
            &copy; {new Date().getFullYear()} &nbsp;
            <Link href="/" className="hover:underline">
              SR-DTU
            </Link>
            . All Rights Reserved.
          </p>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Get Involved
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
