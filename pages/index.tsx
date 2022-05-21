import type { NextPage } from "next";
import { useState } from "react";
import Spinner from "../components/Spinner";
const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [checkingEmail, setCheckingEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-black h-screen flex justify-center items-center w-screen">
      <div className="border border-gray-800 rounded-2xl p-10 space-y-5">
        <h1 className="text-gray-100 text-3xl font-medium mb-12">coinbase</h1>
        <div className="flex flex-col space-y-4">
          <h1 className="text-gray-100 text-3xl font-bold">Sign in</h1>
          <div className="flex flex-col space-y-1 pb-5">
            <label
              htmlFor="email"
              className="text-gray-100 font-medium text-sm"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              name="email"
              id="email"
              className="p-4 font-medium rounded-lg focus:outline-none bg-black text-gray-400 border-gray-800 border focus:border-blue-500"
            ></input>
          </div>
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
            className="bg-blue-500 hover:bg-blue-400  w-80 border border-blue-900 p-4 rounded-lg font-medium tracking-wide text-gray-900 flex items-center justify-center"
          >
            {loading ? <Spinner color="text-gray-800" /> : "Continue"}
          </button>
          <button className=" hover:bg-gray-900 hover:bg-opacity-30 w-80 border border-gray-800 p-4 rounded-lg font-medium tracking-wide text-gray-100">
            Create account
          </button>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <p className="font-medium text-sm text-blue-600">
            Sign into a business account
          </p>
          <p className="font-medium text-sm text-blue-600">Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
