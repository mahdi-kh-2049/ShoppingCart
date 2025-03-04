import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();
  const {
    handleRemoveProduct,
    getProductQty,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
  } = useShoppingCartContext();
  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  });

  return (
    <div>
      <Container>
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className="col-span-10 p-4">
            <h1 className="text-right">{product?.title}</h1>
            <div>
              <p className="text-right">قیمت :{product?.price}$</p>
              <p className="text-right">{product?.description}</p>
            </div>
          </div>
          <div className="col-span-2 p-4 bg-sky-200">
            <img className="rounded" src={product?.image} alt="" />
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                className="mt-2 w-full !py-3"
                variant="primary"
              >
                اضافه به سبد
              </Button>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full "
                    variant="primary"
                  >
                    +
                  </Button>
                  <span className="flex justify-center items-center">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full"
                    variant="primary"
                  >
                    -
                  </Button>
                </div>
                <Button
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                  className="mt-2 w-full !py-3"
                  variant="danger"
                >
                  حذف
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
