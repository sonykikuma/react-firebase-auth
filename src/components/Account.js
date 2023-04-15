import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { user, logout } = UserAuth();
  //const { logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold p-4">Hello World</h1>
      <p>User Email:{user && user.email}</p>
      <button
        onClick={handleLogout}
        className="border px-6 py-2 my-4 bg-blue-400 hover:bg-blue-600 hover:rounded-md "
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
