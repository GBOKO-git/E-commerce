

"use client";
import { loginUser } from "@/Redux/user/userActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Attendre que la connexion soit effectuée avec succès
      const result = await dispatch(loginUser(form));
      console.log("verifier le result:",result);
      console.log("Utilisateur connecté :", result.payload);

      // Si la requête a été réussie
      if (result.meta.requestStatus === "fulfilled") {
        // alert("Vous êtes connecté !");
        // Redirection vers la page d'accueil après la connexion
        router.push("/products");
      } else {
        alert("Connexion échouée. Veuillez vérifier vos identifiants.");
      }
    } catch (error) {
      alert("Une erreur s'est produite. Essayez de nouveau.");
      console.error(error);
    }
  };
  

  return (
    <>
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Se connecter à notre plateforme
          </h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre email
            </label>
            <input
              onChange={handleChange}
              value={form.email}
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Votre mot de passe
            </label>
            <input
              onChange={handleChange}
              value={form.password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Se connecter à votre compte
          </button>
          <Link href="/Login?redirect=/product">Connexion</Link>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Pas encore inscrit ?{" "}
            <Link
              href="/Register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LogIn;
