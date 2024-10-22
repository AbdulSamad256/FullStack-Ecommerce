import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";
import { Button, Image, Typography, Spin } from "antd";

const { Title, Paragraph } = Typography;

function ProductDetail() {
  const { id } = useParams();
  const { addToCart, isItemAdded } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-1/2 p-4">
          <Image
            preview={false}
            src={product?.thumbnail}
            alt={product?.title}
            className="rounded-lg shadow-lg"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <Title level={2} className="mb-4">
            {product?.title}
          </Title>
          <Paragraph className="mb-6 text-lg">{product?.description}</Paragraph>
          <Title level={4} className="text-green-500 mb-4">
            ${product?.price}
          </Title>

          <Button
            type="primary"
            size="large"
            className="bg-blue-500 text-white mt-4"
            onClick={() => addToCart(product)}
          >
            {isItemAdded(product.id)
              ? `Added (${isItemAdded(product.id)?.quantity})`
              : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
