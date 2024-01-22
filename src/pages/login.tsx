// Importing necessary components and hooks
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
  LayoutList,
  Timer,
  Users,
  Warehouse,
} from "lucide-react";
 
 
import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";  
import Drawer from "@mui/material/Drawer";
import photo from './logo.png'
import {  Card,CardContent } from "@mui/material";
import { LayoutDashboard, MessageCircleCodeIcon} from "lucide-react";
 
// Component for the Login page
const Login = () => {
  // State to manage input data (username and password)
  const [data, setData] = useState({
    username: "",
    password: "",
    role: "",
  });
 
  // Accessing the login function from the AuthContext
  const { login } = useAuth();
 
  // Function to update state when input data changes
  const handleDataChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        [name]: e.target.value,
      });
    };
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Update the role field in the data state
    setData({
      ...data,
      role: e.target.value,
    });
  };
 
  // Function to handle the login process
  const handleLogin = async () => await login(data);
 
 
  const drawWidth = 280;
 
 
  const [mobileViewOpen, setMobileViewOpen] = useState<boolean>(false);
 
  const handleToggle = (): void => {
      setMobileViewOpen(!mobileViewOpen);
  };
 
  const responsiveDrawer = (
    <div style={{ backgroundColor: "#FFFFFF",
      height: "100%",fontFamily:"'Nunito Sans', sans-serif", }}>
      <div className="mt-5 px-7">
          <img src={photo} className='w-[22%] ml-[15%]' alt="" />
        <span>
          <h1 className=' font-bold text-red-600 border-b-2 w-28 text-lg border-red-200 ml-[5%]'>COLONELZ</h1>
          <p className=' text-xs font-semibold ml-[5%]'>BUILDING RELATIONSHIPS</p>
        </span>
        </div>
        <div className=" pr-10 pl-4 text-medium mt-[10%] font-semibold">
          <Link to="https://colonelz.vercel.app/">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%]  flex  py-[9px] px-6 rounded-md">
            <LayoutDashboard/><h2 className="ml-3">Dashboard</h2></button>
          </Link>
          <Link to="https://colonelz.vercel.app/project">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <LayoutList/><h2 className="ml-3">All Projects</h2></button>
          </Link>
          <Link to="https://colonelz.vercel.app/inventory">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Warehouse/><h2 className="ml-3">Inventory</h2></button>
          </Link>
          <Link to="https://colonelz.vercel.app/mom">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Timer/><h2 className="ml-3">MOM</h2></button>
          </Link>
          <Link to="https://colonelz.vercel.app/lead">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Users/><h2 className="ml-3">Lead Management</h2></button>
          </Link>
          <Link to="/chat">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-[9px] px-6 rounded-md">
            <MessageCircleCodeIcon/><h2 className="ml-3">Chat</h2></button>
          </Link>
        </div>
 
    </div>
  );
 
  return (
    <div className="h-[100vh] bg-[rgb(241 245 249)]">
            <div>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                 
         
                    <Box
                        component="nav"
                        sx={{
                            width: { sm: drawWidth },
                            flexShrink: { sm: 0 }
                        }}
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileViewOpen}
                            onClose={handleToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { xs: "block", sm: "none" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                    boxShadow: 1
                                },
                            }}
                        >
                            {responsiveDrawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: "none", sm: "block" },
                                "& .MuiDrawer-paper": {
                                    boxSizing: "border-box",
                                    width: drawWidth,
                                },
                            }}
                            open
                        >
                            {responsiveDrawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                           
                            width: { sm: `calc(100% - ${drawWidth}px)` },
                        }}
                    >
                        <Card sx={{ minWidth: 275, overflow: "auto" }}>
                            <CardContent>
                            <div className="flex justify-between">
      <div className="">
     
      </div>
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="max-w-5xl w-1/2 p-8 flex justify-center items-center gap-5 flex-col bg-white shadow-md rounded-2xl my-16 border-secondary border-[1px]">
          <h1 className="inline-flex items-center text-2xl mb-4 flex-col">
            <LockClosedIcon className="h-8 w-8 mb-2" /> Login
          </h1>
          {/* Input for entering the username */}
          <Input
            className="bg-[#FFFAFA] text-dark placeholder:text-dark"
            placeholder="Enter the username..."
            value={data.username}
            onChange={handleDataChange("username")}
          />
          {/* Input for entering the password */}
          <Input
            className="bg-[#FFFAFA] text-dark placeholder:text-dark"
            placeholder="Enter the password..."
            type="password"
            value={data.password}
            onChange={handleDataChange("password")}
          />
          <select
            className="block w-full rounded-xl outline outline-[1px] outline-zinc-400 border-0 py-4 px-5 bg-[#FFFAFA] text-dark placeholder:text-dark"
            onChange={handleRoleChange}
            value={data.role}
          >
            <option value="">Select a role</option>
            <option value="ADMIN">Admin</option>
            <option value="CLIENT">Client</option>
            <option value="DESIGNER">Designer</option>
            <option value="SUPERVISER">Supervisor</option>
            <option value="VISUALIZER">3D Visualizer</option>
 
            {/* Add more roles as needed */}
          </select>
          {/* Button to initiate the login process */}
          <Button
            disabled={Object.values(data).some((val) => !val)}
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
          {/* Link to the registration page */}
          <small className="text-dark-300">
            Don&apos;t have an account?{" "}
            <a className="text-indigo-500 hover:underline" href="/register">
              Register
            </a>
          </small>
        </div>
      </div>
    </div>
                             
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </div>
        </div>
  );
};
 
export default Login;
