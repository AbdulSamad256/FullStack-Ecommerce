import { ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Image } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header() {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();
    const isLogin = true;

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
                <Link to="/">
                    <Image
                        height={50}
                        width={50}
                        className="rounded-full"
                        preview={false}
                        src="https://plus.unsplash.com/premium_photo-1728412893619-698e654490a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D"  
                    />
                   
                </Link>

                <nav className="flex-grow flex items-center justify-center md:justify-start md:ml-10 text-base">
                    {/* <Link className="mr-5 hover:text-gray-900" to="/products">Products</Link>
                    <Link className="mr-5 hover:text-gray-900" to="/orders">Orders</Link> */}
                </nav>

                <div className="flex items-center gap-4">
                    {isLogin ? (
                        <Avatar size={50} icon={<UserOutlined />} />
                    ) : (
                        <Button type="primary" onClick={() => navigate("/auth")}>Login</Button>
                    )}

                    <Link to="/cart">
                        <Badge count={cartItems.length} color="red">
                            <ShoppingOutlined style={{ fontSize: 30, color: "black" }} />
                        </Badge>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
