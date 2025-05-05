"use client";
import LogIn from "@/Components/SingIn";
import { Suspense } from "react";

const Login = () => {
  return (
    <>
      <Suspense fallback={<div>Chargement en cours...</div>} >
        <div className="min-h-screen  place-items-center pt-40">
          <LogIn />
        </div>
      </Suspense>
    </>
  );
};
export default Login;
