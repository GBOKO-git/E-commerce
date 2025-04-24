"use client";

import { logout } from "@/Redux/user/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.user) || {};
  const { user } = loginUser;

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Déconnexion via Redux
    localStorage.removeItem('token'); // Optionnel si tu veux supprimer le token
    router.push("/Login"); // Rediriger vers la page de login
  };
  

  return (
    <nav className="bg-green-800 fixed top-0 w-full border-b border-gray-200 dark:bg-gray-900 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-3 text-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img src="/logo/ecme.png" className="h-8" alt="AZshop Logo" />
          <span className="text-2xl font-semibold">AZshop</span>
        </Link>

        {/* Navigation */}
        <ul className="flex flex-row font-medium space-x-8 text-xl">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
        </ul>

        {/* Barre de recherche */}
        <form className="hidden md:block max-w-md w-full">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search products..."
            />
            <button
              type="submit"
              className="absolute right-2 bottom-1.5 bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 text-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Utilisateur connecté ou non */}
        {!user ? (
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              href="/Register"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Sign up
            </Link>
            <Link
              href="/Login"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="relative hidden md:block">
            <select
              onChange={(e) => {
                if (e.target.value === "logout") handleLogout(e);
                if (e.target.value === "dashboard") router.push("/dashboard");
              }}
              className="rounded border py-2 px-3 bg-white text-black focus:outline-none"
            >
              <option value="profile">profile</option>
              <option value="dashboard">Dashboard</option>
              <option value="logout">Logout</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";

// const Header = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const loginUser = useSelector((state) => state.user) || {};
//   const { user } = loginUser;

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(logout());
//     if (result.meta.requestStatus  === "fulfilled") {
//       router.push("http://localhost:3000/Login");
//     } else{
//       alert("Connexion échouée. Veuillez vérifier vos identifiants.");
//     }

//   };

//   return (
//     <>
//       <nav className="bg-blue-900 fixed top-0 w-full border-b border-gray-200 dark:bg-gray-900 z-50">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-3 text-white">
//           {/* Logo + Titre */}
//           <Link href="/" className="flex items-center space-x-3">
//             <img src="/logo/ecme.png" className="h-8" alt="AZshop Logo" />
//             <span className="text-2xl font-semibold">AZshop</span>
//           </Link>

//           {/* Navigation */}
//           <ul className="flex flex-row font-medium space-x-8 text-xl">
//             <li>
//               <Link href="/" className="text-white hover:underline">
//                 Home
//               </Link>
//             </li>
//           </ul>

//           {/* Formulaire de recherche */}
//           <form className="hidden md:block max-w-md w-full">
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Search products..."
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 bottom-1.5 bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800 text-sm"
//               >
//                 Search
//               </button>
//             </div>
//           </form>

//           {user ? (
//             <div className="relative hidden md:block">
//               <select className="rounded border py-2 px-3 bg-white text-black focus:outline-none">
//                 <option>Profile</option>
//                 <option>Dashboard</option>
//                 <option onClick={handleLogout}>lout out</option>
//               </select>
//             </div>
//           ) : (
//             <div className="flex items-center space-x-6 rtl:space-x-reverse">
//               <Link
//                 href={`http://localhost:3000/Register`}
//                 className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Sing up
//               </Link>
//               <Link
//                 href={`http://localhost:3000/Login`}
//                 className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Login
//               </Link>
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
