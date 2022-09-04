import React from "react";
import {gameInterface, screenshotsTypes} from "../types/types";
import {useTypedSelector} from "../store/hooks/hooks";
import styles from "./gameDescription.module.css"
import Slider from "./Slider";


const  GameDescription:React.FC<gameInterface> = (
    {   name,
        description_raw,
        released,
        background_image,
        website,
        rating,
    }) => {
    const {screenshots} = useTypedSelector (state => state);
    return (
        <div className={styles.GameDescription} style={{backgroundImage: `url("${background_image}")`}}>
            <h2>{name}</h2>
            <h3>Released at {released} </h3>
            <p>Rating :{rating}</p>
            <Slider className={styles.slider} screenshots={screenshots}/>
            <a className={styles.link} href={website} target="_blank">{name}</a>
        </div>
    );
}

export default GameDescription;