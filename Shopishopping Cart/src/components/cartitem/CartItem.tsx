import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
interface ICartItem {
  id: number;
  qty: number;
}
function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  });

  return (
    <div className="flex flex-row-reverse mt-4 border-b pb-2">
      <Link to={`/product/${id}`}>
        <img className="rounded w-28" src={product?.image} alt="" />
      </Link>
      <div className="mr-4">
        <h3 className="text-right"> {product?.title}</h3>
        <div className="mt-2  flex flex-row-reverse">
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span className="mx-2 pt-1">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
          <Button
            onClick={() => handleRemoveProduct(id)}
            className="mr-2"
            variant="danger"
          >
            حذف محصول
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default CartItem;
