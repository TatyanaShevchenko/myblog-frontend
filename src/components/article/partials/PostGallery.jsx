import React from "react";
import ImageGallery from 'react-image-gallery';

import style from "./Partials.module.scss";
import './Gallery.css';



export const PostGallery =({gallery})=>{
    const items = gallery.map((item)=>{
        console.log('item',item);
        return {
            original:`http://localhost:1337${item.url}`,
            thumbnail :`http://localhost:1337${item.formats.thumbnail.url}`,
            originalAlt: item.alternativeText,
            thumbnailAlt: item.alternativeText,
            description :item.caption
        }
    })
    console.log('items',items);
    return (
        <div className={style.Partial__Gallery}>
           <ImageGallery 
           items={items}
           lazyLoad={true}
           thumbnailPosition='left'
           showPlayButton={false}
           showBullets={true}
           showFullscreenButton={false}
           additionalClass="app-image-gallery"/>
        </div>
    )
}