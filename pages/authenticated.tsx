import { useSession, signOut } from "next-auth/react";
const Page = () => {
  const { data: session, status } = useSession();
  return (
    <div className="bg-black h-screen flex justify-center items-center w-screen">
      {status === "authenticated" ? (
        <div className="">
          <p className="text-white">Signed in as {session.user?.email}</p>{" "}
          <button onClick={() => signOut()} className="text-white">sign out</button>{" "}
        </div>
      ) : (
        <div>
          <p className="text-white">you are not signed in</p>
       
        <a className="text-white" href="/login">
          Sign in
        </a> </div>
      )}
    </div>
  );
};
export default Page;
