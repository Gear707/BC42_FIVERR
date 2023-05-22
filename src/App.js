import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
// import Home from "./modules/Home/Home";
// import Login from "./modules/Auth/Login/Login";
import Register from "./modules/Auth/Register/Register";
import UserProfileLayout from "./layouts/UserProfileLayout/UserProfileLayout";
import UserProfile from "./modules/UserProfile/UserProfile";
import Loading from "./components/Loading/Loading";

const Home = lazy(() => import("./modules/Home/Home"));
const Login = lazy(() => import("./modules/Auth/Login/Login"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" element={<UserProfileLayout />} >
            <Route path="/user" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
