import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Please Login</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <img
          src="https://i.pravatar.cc/150"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-2xl font-bold">{user?.username || "Pradipta"}</h2>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
