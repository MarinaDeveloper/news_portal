import React from "react";
import { NavLink } from "react-router-dom";

import {routeMain as routeMainPage} from "pages/MainPage";
import {routeMain as routeNewsListPage} from "pages/NewsListPage";
import {routeMain as routeContacts} from "pages/Contacts";

import './styles.scss';

const Header = () => {
    return (
      <header className="header">
        <div className='container'>
          <div className="mainHeader">
            <div className="title">News of the day</div>
            <nav>
              <NavLink to={routeMainPage()}>
                Home
              </NavLink>
              <NavLink to={routeNewsListPage()}>
                News
              </NavLink>
              <NavLink to={routeContacts()}>
                Contacts
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    );
}
  
export default Header;  