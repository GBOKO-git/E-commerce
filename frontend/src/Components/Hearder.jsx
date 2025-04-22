import Link from "next/link";
import SingUp from "./SingUp";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-900/100 fixed top-0  w-full border-gray-200 dark:bg-gray-900 z-3 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 text-white">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse  text-xl">
                <li>
                  <Link
                    href={`http://localhost:3000/`}
                    className="text-gray-900  dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href={`http://localhost:3000/Register`}
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Sing up
            </Link>
            <Link
              href={`http://localhost:3000/Login`}
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
