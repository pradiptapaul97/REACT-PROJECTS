import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ userName, password });
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
