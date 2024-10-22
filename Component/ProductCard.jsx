import React, { useContext } from 'react';
import { Card, Col, Image, Tooltip } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ item }) => {
  const { isItemAdded } = useContext(CartContext);
  const isAdded = isItemAdded(item.id);

  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={6}>
      <Link to={`/products/${item.id}`}>
        <Card
          hoverable
          className="transition-transform transform hover:scale-105 rounded-lg shadow-lg"
          bodyStyle={{ padding: 0 }}
        >
          <div className="relative">
            {isAdded && (
              <Tooltip title="Added to cart" placement="top">
                <ShoppingCartOutlined
                  className="text-3xl text-green-500 absolute top-3 right-3"
                />
              </Tooltip>
            )}
            <Image preview={false} src={item.thumbnail} height={220} width="100%" />
          </div>

          <div className="p-4 flex justify-between items-center">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <h3 className="font-semibold text-primary">${item.price}</h3>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
