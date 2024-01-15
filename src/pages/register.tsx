// Import necessary components and hooks
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/AuthContext";


// Component for user registration
const Register = () => {
  // State to manage user registration data
  const [data, setData] = useState({
    email: "",
    username: "",
    role:"",
    password: "",
  });

  // Access the register function from the authentication context
  const { register } = useAuth();

  // Handle data change for input fields
  const handleDataChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      // Update the corresponding field in the data state
      setData({
        ...data,
        [name]: e.target.value,
      });
    };

  // Handle user registration
  const handleRegister = async () => await register(data);

  return (
    // Register form UI
    <div className="flex justify-center items-center flex-col h-screen w-screen ">
      <h1 className="text-3xl font-bold">Chat App</h1>
      <div className="max-w-5xl w-1/2 p-8 flex justify-center items-center gap-5  flex-col bg-white text-dark shadow-md rounded-2xl my-16 border-secondary border-[1px]">
        <h1 className="inline-flex items-center text-2xl mb-4 flex-col ">
          {/* Lock icon */}
          <LockClosedIcon className="h-8 w-8 mb-2 "  /> Register
        </h1>
        {/* Input fields for username, password, and email */}
        <Input className="bg-[#FFFAFA] text-dark placeholder:text-dark"
          placeholder="Enter the email..."
          type="email"
          value={data.email}
          onChange={handleDataChange("email")}
        />
        <Input className="bg-[#FFFAFA] text-dark placeholder:text-dark"
          placeholder="Enter the username..."
          value={data.username}
          onChange={handleDataChange("username")}
        />
        <Input  className="bg-[#FFFAFA] text-dark placeholder:text-dark"
          placeholder="Enter the password..."
          type="password"
          value={data.password}
          onChange={handleDataChange("password")}
        />

         <select
  className="block w-full rounded-xl outline outline-[1px] outline-zinc-400 border-0 py-4 px-5 bg-[#FFFAFA] text-dark placeholder:text-dark"
  onChange={handleDataChange("role")}
>
  <option value="">Select a role</option>
  <option value="ADMIN">Admin</option>
  <option value="CLIENT">Client</option>
  <option value="DESIGNER">Designer</option>
  <option value="SUPERVISER">Supervisor</option>
   <option value="VISUALIZER">3D Visualizer</option>
    
  {/* Add more roles as needed */}
</select>

        {/* Register button */}
        <Button 
          fullWidth
          disabled={Object.values(data).some((val) => !val)}
          onClick={handleRegister}
        >
          Register
        </Button>
        {/* Login link */}
        <small className="text-dark-300">
          Already have an account?{" "}
          <a className="text-indigo-500 hover:underline" href="/login">
            Login
          </a>
        </small>
      </div>
    </div>
  );
};

export default Register;
