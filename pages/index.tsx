import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-white h-screen flex justify-center items-center w-screen">
      <Link href="/login">
        <span className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-xl leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Login
        </span>
      </Link>
    </div>
  );
};

export default Home;
