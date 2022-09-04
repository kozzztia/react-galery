
import React, {useEffect} from 'react';
import {GamesInterface, genreInterface} from "../types/types";
import {useActions, useTypedSelector} from "../store/hooks/hooks";
import {useLocation} from "react-router-dom";
import GamePage from "../ui/GamePage";
import styles from './main.module.css';
import Header from "./Header";
import Footer from "./Footer"

const MainPage: React.FC<genreInterface> = ({name, slug, image_background}: genreInterface)=> {
    const {fetchGames} = useActions()
    const {games,error} = useTypedSelector(state => state);
    const location = useLocation()
    useEffect(()=>{
        fetchGames(slug , 12)
    },[location])
    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className={styles.main}style={{backgroundImage: `url("${image_background}")`}}>
            <Header className={styles.header} name={name} slug={slug}/>
            <div className={styles.pageContainer}>
            {
                games.map((item : GamesInterface, index:number) => <GamePage key={item.id}
                index={index+1}
                name = {item.name}
                slug = {item.slug}
                platforms = {item.platforms}
                released  = {item.released}
                background_image  = {item.background_image}
                rating = {item.rating}
                id = {item.id}
                short_screenshots = {item.short_screenshots}
                />)
            }
            </div>
            <Footer/>
        </div>

    );
}

export default MainPage;