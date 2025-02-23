import Container from "../../components/container/Container";
import CartItem from "../../components/cartitem/CartItem";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useState } from "react";

function Cart() {
  const { cartItems } = useShoppingCartContext();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  return (
    <div>
      <Container>
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} />
          ))}
        </div>
        <div className="text-right bg-gray-200 rounded p-6">
          <p>443.86 : قیمت کل</p>
          <p>200 : تخفیف شما</p>
          <p>243.86: قیمت نهایی</p>
        </div>
        <Button className="mt-2" variant="succes">
          ثبت سفارش
        </Button>
      </Container>
    </div>
  );
}

export default Cart;
