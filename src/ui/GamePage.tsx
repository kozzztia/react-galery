import React from 'react';
import {GamesInterface} from "../types/types";
import styles from './gamePage.module.css';
import MoreBtn from "./MoreBtn";



function GamePage ({name, slug, released, background_image, rating, id, short_screenshots,index }: GamesInterface): JSX.Element {

    return (
        <div className={styles.page} style={{backgroundImage: `url("${background_image}")`}}>
           <h1>{index} : {name}</h1>
            <h2>Rating : {rating}</h2>
            <div className={styles.screenshots}>
                {
                    short_screenshots.map((item) => <img
                        key = {item.id + slug}
                        src={item.image} alt='img'/>)
                }
            </div>

            <h2>Released : {released} </h2>
            <MoreBtn slug={slug} name={name} className={styles.moreBtn} id={id} short_screenshots = {short_screenshots}/>
        </div>
    );
}

export default GamePage;






