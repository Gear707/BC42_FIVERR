import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout/HomeLayout";

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
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/jobList/:keyword" element={<JobList />} />
            <Route
              path="/:tenLoaiCongViec/:MaLoaiCongViec"
              element={<CategoryDetail />}
            />
          </Route>
        </Routes>
        {/* <Route path="/*" element={<PageNotFound />}></Route> */}
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
