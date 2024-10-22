import { Button, Form, Modal } from "antd";
import { Input } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../utils/firebase";

const CheckOutModal =({
    isModalOpen,
    handleOk,
    checkoutOrder,
    handleCancel,

})=>{
    useEffect(()=>{
        return setContinueAsGuest(false);
    },[])

    const [ContinueAsGuest , setContinueAsGuest] = useState(false);
    const isLogin = auth.currentUser;
return(
   
    <Modal
    title="CheckOut Modal"
    open={isModalOpen}
    onOk={handleOk}
    closable = {false}
    footer = {null}
    onCancel={handleCancel}
    >

     {!isLogin && !ContinueAsGuest &&(
        <div className="flex flex-col items-center">
            <h1 className="text-center my-5">
                Login to Save Order's and See progress
            </h1>
            <Button type="primary" > Continue with Google</Button>
            <h1 className="text-center my-5">------OR-----</h1>
            <Button onClick={()=> setContinueAsGuest(true)} >
                Continue As Guest
            </Button>
        </div>
     )}

     {isLogin || (
        ContinueAsGuest && (
            <Form onFinish={checkoutOrder} layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input id="username" name="username" />
            </Form.Item>
          
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "The input is not valid E-mail!" }
              ]}
            >
              <Input id="email" name="email" type="email" />
            </Form.Item>
          
            <Form.Item
              name="number"
              label="Phone Number"
              rules={[{ required: true, message: "Please input your phone number!" }]}
            >
              <Input id="phone" name="phone" type="number" />
            </Form.Item>
          
            <Form.Item
              name="address"
              label="Address"
              rules={[{ required: true, message: "Please input your address!" }]}
            >
              <Input.TextArea id="address" name="address" placeholder="Address" />
            </Form.Item>
          
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          
        

        ))}


    </Modal>
);
};

export default CheckOutModal;
