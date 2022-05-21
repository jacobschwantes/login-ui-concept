import { NextComponentType, NextPage, NextPageContext } from "next";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { ok } from "assert";
type Tab = {
  heading: string;
};
interface LoginCardProps {}

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Login: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState({});
  const [error, setError] = useState("");

  return (
    <div className="bg-black h-screen flex justify-center items-center w-screen">
      <LoginCard />
    </div>
  );
};

const LoginCard: NextComponentType<NextPageContext, {}, LoginCardProps> = (
  props
) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitEmail = async (email: string) => {
    const result = await fetch(`/api/authenticate/${email}`)
      .then(async (res) => {
        if (res.ok) {
          return res;
        } else {
          let text = await res.text();
          throw new Error(text);
        }
      })
      .catch((e) => {
        setError(e.message);
      });
    console.log(result);
    setLoading(false);
  };
  return (
    <div className="border border-gray-800 rounded-2xl p-10 w-1/3 space-y-5">
      <h1 className="text-gray-100 text-3xl font-medium mb-12">coinbase</h1>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          if (!validateEmail(email)) {
            setError("Please enter a valid email address");
          } else {
            submitEmail(email);
            setLoading(true);
          }
        }}
        className="flex flex-col space-y-4"
      >
        <h1 className="text-gray-100 text-3xl font-bold">Sign in</h1>
        <div className="flex flex-col space-y-1 pb-5">
          <label htmlFor="email" className="text-gray-100 font-medium text-sm">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
            placeholder="Your email address"
            name="email"
            id="email"
            className={
              "p-4 font-medium rounded-lg focus:outline-none bg-black text-gray-400 border-gray-800 border " +
              (error ? "border-red-500" : "focus:border-blue-500")
            }
          ></input>
          <p className="text-red-500 font-medium text-sm">{error}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400 w-full border border-blue-900 p-4 rounded-lg font-medium tracking-wide text-gray-900 flex items-center justify-center"
        >
          {loading ? <Spinner color="text-gray-800" /> : "Continue"}
        </button>
        <button className=" hover:bg-gray-900 hover:bg-opacity-30 w-full border border-gray-800 p-4 rounded-lg font-medium tracking-wide text-gray-100">
          Create account
        </button>
      </form>
      <div className="flex flex-col items-center space-y-3">
        <p className="font-medium text-sm text-blue-600">
          Sign into a business account
        </p>
        <p className="font-medium text-sm text-blue-600">Privacy policy</p>
      </div>
    </div>
  );
};
export default Login;
