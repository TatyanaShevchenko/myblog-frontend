import React from "react";
import { useHistory } from "react-router-dom";

import animation from '../../images/gif/page-not-found.gif'

import style from "./NotFound.module.scss";

export const NotFound =()=>{
    const history = useHistory();
    const onClick=()=>{
        history.goBack();
    }
    return (
        <div className={style.NotFound}>
            <p className={style.NotFound__Text}><span className={style.NotFound__Oops}>Ууупс!</span> Что-то пошло не так... Ты ищешь что-то, чего не существует!</p>
            <img className={style.NotFound__Animation} src={animation} alt="Not found" />
            <button 
            onClick={onClick}
            className={style.NotFound__Link}>Go back friend, go back</button>
        </div>
    )
}