import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const { cartQty,handleLogout,isLogin } = useShoppingCartContext();
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse font-bold">
          <ul className="flex">
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
          </ul>
          <div>
            <Link className="relative " to={"/cart"}>
              
              <button className="pl-9">سبد خرید</button>
              {cartQty !== 0 ? (
                <div
                  className="
              absolute
              w-7
              h-7
              bg-red-600
              flex
              justify-center
              items-center
              rounded-full
              text-white
              top-0  
              
                "
                >
                  {cartQty}
                </div>
              ) : (
                ""
              )}
            </Link>
          </div>

          <span>
            {isLogin ? (
              <button className="text-red-500" onClick={handleLogout}>
                خروج
              </button>
            ) : (
              ""
            )}
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
