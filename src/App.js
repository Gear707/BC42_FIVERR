import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css';
import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import Home from "./modules/Home/Home";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";
import UserProfileLayout from "./layouts/UserProfileLayout/UserProfileLayout";
import UserProfile from "./modules/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/" element={<UserProfileLayout />}>
          <Route path="/user" element={<UserProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
