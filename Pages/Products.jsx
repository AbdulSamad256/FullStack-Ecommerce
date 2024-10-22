import { Row, Button, Pagination, Select, Input, Typography } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(20);
  const [search, setSearch] = useState(""); // State for search query
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  // Fetch categories on component mount
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // Fetch products when skip, category or limit changes
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    if (selectedCategory) {
      url = `https://dummyjson.com/products/category/${selectedCategory}?limit=${limit}&skip=${skip}`;
    }

    axios.get(url).then((res) => {
      console.log("res.data", res.data);
      setProducts(res.data.products);
      setTotal(res.data.total);
    });
  }, [skip, selectedCategory]);

  // Search products by search query
  const searchProducts = () => {
    if (search) {
      axios
        .get(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => {
          setProducts(res.data.products);
          setTotal(res.data.total);
        });
    }
  };

  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <div className="text-center my-8">
        <Title level={2}>Explore Our Products</Title>
        <p className="text-gray-600">
          Browse through a wide variety of categories and find exactly what you need.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="flex gap-4 justify-between items-center mb-10">
        {/* Search Input */}
        <Input
          type="search"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state
          className="h-12 w-full rounded-md"
          style={{ maxWidth: "400px" }}
        />

        {/* Category Filter */}
        <Select
          showSearch
          className="h-12 w-full"
          placeholder="Select Category"
          value={selectedCategory || null} // Update selected category
          onChange={(value) => setSelectedCategory(value)} // Fetch products based on selected category
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={categories.map((category) => ({
            label: category.name, // Use the category name as the label
            value: category.slug, // Use the category slug as the value
          }))}
          style={{ maxWidth: "300px" }}
        />

        {/* Search Button */}
        <Button
          icon={<SearchOutlined />}
          className="h-12"
          type="primary"
          onClick={searchProducts} // Trigger search
        >
          Search
        </Button>
      </div>

      {/* Display products */}
      <Row gutter={[24, 24]} justify="center">
        {products.map((data) => (
          <ProductCard key={data.id} item={data} />
        ))}
      </Row>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        <Pagination
          onChange={(num) => {
            setSkip((num - 1) * 20); // Update skip value on page change
          }}
          defaultCurrent={1}
          pageSize={20}
          total={total}
          className="pagination"
        />
      </div>
    </div>
  );
}

export default Products;
