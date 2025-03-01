import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { KeySquare, Lock } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "@/context/StoreContext";


function Login({ setShowLogin}) {
  const [auth, setAuth] = useState("Register");
  const {url,setToken} = useContext(StoreContext);
  
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newUrl =
      url + (auth === "Register" ? "/api/user/register" : "/api/user/login");
      console.log(newUrl);
      
    try {
      const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
      toast.success("Authentication Successfully")
    } else {
      toast.error(response.data.message);
    }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
    
  };
  
  
  return (
    <div className="place-self-center py-32 bg-black/80 w-full  h-full absolute text-black min-h-[1000px]">
      <Tabs
        defaultValue="Register"
        className="w-[450px] mx-auto bg-background rounded-md p-10"
      >
        <div className="flex justify-between items-center pb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold">{auth}</h2>
            <span>{auth === "Register" ? <KeySquare /> : <Lock />}</span>
          </div>
          <Button onClick={() => setShowLogin(false)} variant="secondary">
            X
          </Button>
        </div>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger onClick={() => setAuth("Register")} value="Register">
            Register
          </TabsTrigger>
          <TabsTrigger onClick={() => setAuth("Login")} value="Login">
            Login
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Register">
          <Card>
            <form onSubmit={onSubmitHandler}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    value={data.name}
                    onChange={onChangeHandler}
                    id="name"
                    placeholder="eg:John Doe"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Email</Label>
                  <Input
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    id="email"
                    placeholder="eg:johndoe@gmail.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    id="password"
                    placeholder="password here"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-start items-start gap-10">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <Button type="submit" className="w-full">
                  Register
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <form onSubmit={onSubmitHandler}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    value={data.email}
                    onChange={onChangeHandler}
                    id="email"
                    placeholder="eg:johndoe@gmail.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    name="password"
                    value={data.password}
                    onChange={onChangeHandler}
                    id="password"
                    placeholder="Password here"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col justify-start items-start gap-10">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default Login;
