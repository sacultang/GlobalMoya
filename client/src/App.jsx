import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "@pages/error/ErrorPage";
import Home from "@pages/home/Home";
import MainPage from "@pages/main/MainPage";
import Login from "./pages/login/Login";
import RegisterContainer from "@pages/register/RegisterContainer";
import PwChange from "./pages/login/PwChange";
import QuickGuideMain from "@pages/quickGuide/QuickGuideMain";
import { CustomContainer } from "@styles/common/container";
import CategoryMain from "@pages/quickGuide/categorySearch/CategoryMain";
import KeywordMain from "@pages/quickGuide/keywordSearch/KeywordMain";
import SubscribeModal from "./components/SubscribeModal";
import MyPageMain from "./pages/myPage/MyPageMain";
import ContactUs from "@pages/myPage/ContactUs";
import PersonalPolicy from "@pages/myPage/PersonalPolicy";
import ServicePolicy from "@pages/myPage/ServicePolicy";
import Profile from "@pages/myPage/Profile";
import Subscription from "./pages/myPage/Subscription";
import EditKeywordContext from "@pages/edit/keyword/EditKeywordContext";
import EditGroupContext from "@pages/edit/group/EditGroupContext";

import Password from "./pages/myPage/Password";

import ScrapMain from "./pages/scrap/ScrapMain";
import ScrapNews from "./pages/scrap/ScrapNews";
import ScrapNewsEdit from "./pages/scrap/ScrapNewsEdit";
import NewFolder from "./pages/scrap/NewFolder";
import NameChange from "./pages/scrap/NameChange";
import ScrapGroupEdit from "./pages/scrap/ScrapGroupEdit";
import KeywordCardMain from "./pages/main/keywordCardMain/KeywordCardMain";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<MainPage />} />
            {/* Edit */}
            <Route path="/main/edit/keyword" element={<EditKeywordContext />} />
            {/* <Route path="/main/edit/group" element={<EditGroupContext />} /> */}
            <Route
              path="/main/keywordsearch/:id"
              element={<KeywordCardMain />}
            />
            {/* Register */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterContainer />} />
            <Route path="/pwchange" element={<PwChange />} />
            <Route path="/personalpolicy" element={<PersonalPolicy />} />
            <Route path="/servicepolicy" element={<ServicePolicy />} />
            {/* Subs */}
            <Route path="/subscribe" element={<SubscribeModal />} />

            {/* MyPage */}
            <Route path="/mypagemain" element={<MyPageMain />} />
            <Route path="/mypage/profile" element={<Profile />} />
            <Route path="/mypage/password" element={<Password />} />
            <Route path="/mypage/subscription" element={<Subscription />} />

            <Route path="/contactus" element={<ContactUs />} />

            {/*Scrap*/}
            <Route path="/scrap" element={<ScrapMain />} />
            <Route path="/scrap/:id" element={<ScrapNews />} />
            <Route path="/scrapedit/:id" element={<ScrapNewsEdit />} />
            <Route path="/newfolder" element={<NewFolder />} />
            <Route path="/namechange" element={<NameChange />} />
            <Route path="/scrap/groupedit" element={<ScrapGroupEdit />} />

            {/* Quick Search */}
            <Route path="/quick" element={<QuickGuideMain />} />
            <Route path="/quick/:id" element={<CategoryMain />} />
            <Route path="/keyword" element={<KeywordMain />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/Keywordcardmain" element={<KeywordCardMain />} />
          </Routes>
        </CustomContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
