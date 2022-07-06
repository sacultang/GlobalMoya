import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import QuickGuideMain from "./pages/QuickGuideMain";
import { CustomContainer } from "./styles/containerStyle";
import CategoryMain from "./components/quickGuide/category/CategoryMain";
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            {/* 로그인 된 사람 중 키워드 있는 사람만  */}

            <Route path="/quick" element={<QuickGuideMain />} />
            <Route path="/quick/:id" element={<CategoryMain />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CustomContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
