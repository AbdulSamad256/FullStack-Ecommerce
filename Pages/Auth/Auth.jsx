import { Button } from "antd";
import { Link } from "react-router-dom";


function Auth(){
    return(
        <div
        className="flex flex-col w-screen h-screen  justify-center item-center my-5"
      >
        <Button>Login With Google</Button>
        <Button>Login With Github</Button>
        <Link to={"/auth/signin"}>
          <Button>Login with Email</Button> 
        </Link>
        <h1 className="text-center">
          Don't have an account <Link to={"/auth/signup"}>Create Account</Link>
        </h1>
      </div>
    );
}


export default Auth;