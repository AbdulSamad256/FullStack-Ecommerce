import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import { Row , Button } from "antd";
import { Link } from "react-router-dom";




function Home(){

    const [products , setProducts] = useState([])
    
    useEffect(()=>{

        axios
        .get('https://dummyjson.com/products?limit=12')
        .then((res)=>
        setProducts(res.data.products));
    },[])
     
    return(
        <div className="container mx-auto">
            <div className="flex justify-between my-10">
                <h1 className="text-3xl font-mono">Find your Best Products</h1>
                

            </div>
            

                <Row gutter={16} justify={"center"}>
      {products.map((data) =>(
                 <ProductCard key={data.id} item={data}

                 />
               ))}
               </Row>

                <div className=" my-5 flex justify-center text-center ">

               <Link to={"/products"}>

               <Button size="large" color="default" >
                         View All Products
               </Button>

               </Link>

                </div>
        </div>
    )
}


export default Home;