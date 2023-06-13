import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import { Suspense, lazy } from "react";

import HomeLayout from "./layouts/HomeLayout/HomeLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import UserProfileLayout from "./layouts/UserProfileLayout/UserProfileLayout";

import Loading from "./components/Loading/Loading";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const Home = lazy(() => import("./modules/Home/Home"));
const Login = lazy(() => import("./modules/Auth/Login/Login"));
const Register = lazy(() => import("./modules/Auth/Register/Register"));
const UserProfile = lazy(() => import("./modules/UserProfile/UserProfile"));

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
            <Route path="/users/:name" element={<UserProfile />} />
          </Route>

          <Route path="*" element={<PageNotFound/>} />
        </Routes>
=======
import MainLayout from "./layouts/MainLayout/MainLayout";

// import MainLayout from "./layouts/MainLayout/MainLayout";
// import Loading from "./components/Loading/Loading";

//lazy: thực hiện cơ chế tải chậm. Bắt đầu tại thời điểm gọi component mới bắt đầu tải về. Tránh các component không cần thiết tải dữ liệu từ ban đầu
const Home = lazy(() => import("./modules/Home/Home"));
const JobList = lazy(() => import("./modules/JobList/JobList"));
const CategoryDetail = lazy(() =>
  import("./modules/CategoryDetail/CategoryDetail")
);

function App() {
  return (
    // Tại thời điểm component tải dữ liệu component Suspense sẽ hiển thị giao diện thay thế
    // <Suspense fallback={<Loading />}>
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/jobList/:keyword" element={<JobList />} />
            <Route
              path="/:tenLoaiCongViec/:MaLoaiCongViec"
              element={<CategoryDetail />}
            />
          </Route>
        </Routes>
        {/* <Route path="/*" element={<PageNotFound />}></Route> */}
>>>>>>> quyen-branch
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
