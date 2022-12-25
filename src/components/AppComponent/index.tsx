import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage, {routeMain as routeMainPage} from "pages/MainPage";
import NewsDetail, {routeMain as routeNewsDetail} from "pages/NewsDetail";
import Contacts, {routeMain as routeContacts} from "pages/Contacts";
import NewsListPage, {routeMain as routeNewsListPage} from "pages/NewsListPage";

import Footer from "components/Footer";
import Header from "components/Header";

import './styles.scss';


const AppContent = () => {
    return (
      <div className="mainWrapper">
        <Header />
        <main>
          <div className='container'>
            <Routes>
              <Route path={routeMainPage()} element={<MainPage />}/>
              <Route path={routeNewsListPage()} element={<NewsListPage />}/>
              <Route path={routeNewsDetail()} element={<NewsDetail />}/>
              <Route path={routeContacts()} element={<Contacts />}/>
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default AppContent;  