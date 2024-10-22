import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image, message, Typography, Space, Popconfirm } from "antd";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { DeleteOutlined } from "@ant-design/icons";
import CheckOutModal from "../Component/CheckoutModal";

const { Title } = Typography;

function Carts() {
  const { cartItems, updateToCart, removeCart, clearCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const totalQuantity = cartItems.reduce((value, item) => value + item.quantity, 0);
  const totalPrice = cartItems.reduce((value, item) => value + item.quantity * item.price, 0);

  const checkoutOrder = async (values) => {
    const checkoutObj = {
      ...values,
      totalPrice,
      totalQuantity,
      status: "pending",
      user: auth.currentUser ? auth.currentUser.uid : "guest",
      items: cartItems.map(
        (data) => `Item: ${data.title}, Price: ${data.price}, Quantity: (${data.quantity})`
      ),
    };

    const docRef = collection(db, "orders");
    addDoc(docRef, checkoutObj).then(() => message.success("Your Order is Placed"));
    clearCart();
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      <CheckOutModal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        checkoutOrder={checkoutOrder}
      />

      <div className="flex justify-between items-center my-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="text-center">
          <Title level={4}>Total Quantity</Title>
          <h1 className="text-xl font-semibold">{totalQuantity}</h1>
        </div>
        <div className="text-center">
          <Title level={4}>Total Price</Title>
          <h1 className="text-xl font-semibold">${Math.floor(totalPrice)}</h1>
        </div>
        <Button type="primary" size="large" onClick={openModal}>
          Proceed to Checkout
        </Button>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center border-b py-4">
          <Image src={item.thumbnail} alt={item.title} height={100} width={100} className="rounded-md" />
          <div className="flex-grow px-4">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <h3 className="text-gray-600">${item.price}</h3>
            <div className="flex items-center gap-4 mt-3">
              <Button onClick={() => updateToCart(item.id, "plus")}>+</Button>
              <span>{item.quantity}</span>
              <Button
                onClick={() => {
                  if (item.quantity <= 1) {
                    removeCart(item.id);
                  } else {
                    updateToCart(item.id, "minus");
                  }
                }}
              >
                -
              </Button>
              <Popconfirm
                title="Are you sure to delete this product?"
                onConfirm={() => removeCart(item.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button danger icon={<DeleteOutlined />} />
              </Popconfirm>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
