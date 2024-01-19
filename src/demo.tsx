import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  LayoutList,
  MessageCircleCodeIcon,
  Timer,
  Users,
  Warehouse,
} from "lucide-react";

const drawWidth = 280;

interface ApiResponse {
  status: number;
  data: any;
  message: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [mobileViewOpen, setMobileViewOpen] = useState(false);

  const handleToggle = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  const responsiveDrawer = (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        height: "100%",
        fontFamily: "'Nunito Sans', sans-serif",
      }}
    >
      <div className="mt-5 px-7 ">
        <img src={photo} className="w-[22%] ml-[5%]" alt="" />
        <span className="ml-[5%]">
          <h1 className="font-bold text-red-600 border-b-2 w-28 text-lg border-red-200">
            COLONELZ
          </h1>
          <p className="text-xs font-semibold">BUILDING RELATIONSHIPS</p>
        </span>
      </div>
      <div className="pr-10 pl-4 text-medium mt-[10%] font-semibold">
        <Link to="/">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] flex py-[9px] px-6 rounded-md">
            <LayoutDashboard />
            <h2 className="ml-3">Dashboard</h2>
          </button>
        </Link>
        <Link to="/project">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] mt-3 flex bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-[9px] px-6 rounded-md">
            <LayoutList />
            <h2 className="ml-3">All Projects</h2>
          </button>
        </Link>
        <Link to="/inventory">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] mt-3 flex py-[9px] px-6 rounded-md">
            <Warehouse />
            <h2 className="ml-3">Inventory</h2>
          </button>
        </Link>
        <Link to="/mom">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] mt-3 flex py-[9px] px-6 rounded-md">
            <Timer />
            <h2 className="ml-3">MOM</h2>
          </button>
        </Link>
        <Link to="/lead">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] mt-3 flex py-[9px] px-6 rounded-md">
            <Users />
            <h2 className="ml-3">Lead Management</h2>
          </button>
        </Link>
        <Link to="/chat">
          <button className="font-['Nunito Sans', sans-serif] w-[100%] mt-3 flex py-[9px] px-6 rounded-md">
            <MessageCircleCodeIcon />
            <h2 className="ml-3">Chat</h2>
          </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="h-[100vh] bg-[rgb(241 245 249)]">
      <div>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawWidth}px)` },
              backgroundColor: "rgb(241 245 249)",
              fontFamily: "'Nunito Sans', sans-serif",
              boxShadow: "none",
              paddingX: 3,
            }}
          >
            <Toolbar
              sx={{
                paddingX: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: 1,
                mt: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawWidth }, flexShrink: { sm: 0 } }}
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
                  boxShadow: 1,
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
              p: 3,
              width: { sm: `calc(100% - ${drawWidth}px)` },
            }}
          >
            <Toolbar />
            <Card sx={{ minWidth: 275, overflow: "auto" }}>
              <CardContent>
                <h1 className="text-2xl font-bold mb-4 ml-6">Project</h1>
                <Data />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default App;
