// import logo from './logo.svg';
// import * as React from "react";
// import { QueryClient, QueryClientProvider } from 'react-query'
import "./App.scss";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import { Profiler, useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext";
import { AuthContext } from "./context/authContext";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient= new QueryClient();

// import { TRUE } from "sass";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  
  // const currentUser= true;
  const [rightbar, setRightBar] = useState(true);
  // const toggleRightBar = () => {
  //   setRightBar(!rightbar);
  // };


  const checkWindowSize = () => {
    setRightBar(window.innerWidth > 960); // You can adjust the resolution threshold as needed (e.g., 768 for mobile screens)
  };

  // Add event listener to handle window resize
  useEffect(() => {
    checkWindowSize(); // Set the initial state based on the current window size
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);



  const { darkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar  rightbar={rightbar} setRightBar={setRightBar}/>
        
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          {/* <Rightbar /> */}
          
          {rightbar  && <Rightbar />}
          
        </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    // <>
    // <Login/>
    // </>
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );


}

export default App;
