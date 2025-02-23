import React, { useState } from "react";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Container>
        <div className="bg-slate-300 p-8 rounded border-3 w-80 flex mx-auto flex-col items-center">
          <input
            className="border-2 bg-gray-200 rounded text-sm p-2 w-56"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
          />
          <input
            className="border-2 bg-gray-200 rounded mt-3 text-sm p-2 w-56"
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
          />
          <Button
            className="border-2 bg-emerald-600 rounded mt-5 px-6 py-2 text-white"
            onClick={() => handleLogin(user.username, user.password)}
          >
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
