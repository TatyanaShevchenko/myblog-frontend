import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

import { ReactComponent as Youtube } from "../../images/icons/youtube-brands.svg";
import { ReactComponent as Instagram } from "../../images/icons/instagram-brands.svg";
import { ReactComponent as Facebook } from "../../images/icons/facebook-square-brands.svg";
import style from "./Header.module.scss";
import "./Header.scss";


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(isVisible => !isVisible);
  };
  return (
    <div className={style.Header}>
      <div className={style.Header__Container}>
        <div className={style.Header__Title}>My blog</div>
          <div className={style.Header__MobMenu} onClick={toggleMenu}>
            <div className={classNames(style.Header__MobMenu_Line, isVisible&&style.cross)}></div>
            <div className={classNames(style.Header__MobMenu_Line, isVisible&&style.none)}></div>
            <div className={classNames(style.Header__MobMenu_Line, isVisible&&style.crossReverse)}></div>
          </div>
        <nav className={classNames(style.Header__Menu, !isVisible&&style.inactive)}>
          <ul className={style.Header__MenuList}>
            <li className={style.Header__MenuList_Item}>
              <NavLink exact to="/" className={style.Header__MenuList_ItemLink}>
                Главная
              </NavLink>
            </li>
            <li className={style.Header__MenuList_Item}>
              <NavLink
                exact
                to="/moveout"
                className={style.Header__MenuList_ItemLink}
              >
                переезд
              </NavLink>
            </li>
            <li className={style.Header__MenuList_Item}>
              <NavLink
                exact
                to="/austria"
                className={style.Header__MenuList_ItemLink}
              >
                австрия
              </NavLink>
            </li>
            <li className={style.Header__MenuList_Item}>
              <NavLink
                exact
                to="/education"
                className={style.Header__MenuList_ItemLink}
              >
                обучение
              </NavLink>
            </li>
            <li className={style.Header__MenuList_Item}>
              <NavLink
                exact
                to="/work"
                className={style.Header__MenuList_ItemLink}
              >
                работа
              </NavLink>
            </li>
            <li className={style.Header__MenuList_Item}>
              <NavLink
                exact
                to="/stuff"
                className={style.Header__MenuList_ItemLink}
              >
                разное
              </NavLink>
            </li>
          </ul>
          <div className={style.Header__MenuSocials}>
            <a href="/" className={style.Header__MenuSocials_Href}>
              <Youtube className={style.Header__MenuSocials_Icon} />
            </a>
            <a href="/" className={style.Header__MenuSocials_Href}>
              <Instagram className={style.Header__MenuSocials_Icon} />
            </a>
            <a href="/" className={style.Header__MenuSocials_Href}>
              <Facebook className={style.Header__MenuSocials_Icon} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
