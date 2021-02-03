import React from "react";
import { animateScroll as scroll} from 'react-scroll'
 
import style from './Footer.module.scss';

const Footer =()=>{
    const currentYear = new Date().getFullYear();
    const scrollToTop =()=>{
        scroll.scrollToTop();
    }
    return (
        <div className={style.Footer}>
            <div className={style.Footer__Container}>
               <p className={style.Footer__Text}>© Tatyana Shevchenko {currentYear}</p>
               <button onClick={scrollToTop} className={style.Footer__ButtonTop}>TOP</button>
            </div>
        </div>
    )
}

export default Footer;