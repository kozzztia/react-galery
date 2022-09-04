
import React, {useEffect} from 'react';

import {useActions, useTypedSelector} from "../store/hooks/hooks";
import {NavLink} from "react-router-dom";
import Loader from "../ui/loading";
import styles from "./genreList.module.css"

const GenreList: React.FC = () => {
    const {loading , error , genres , hideMenu} = useTypedSelector (state => state)
    const {fetchGenres} = useActions()
    useEffect(()=>{
        fetchGenres("genres")
    },[])


    if(loading) {
        return <Loader/>
    }
    if(error) {
        return <h2>{error}</h2>
    }

    return (
        <div
            className={
                hideMenu
                    ? styles.genreListClose +" " +styles.genreList
                    : styles.genreListOpen +" " +styles.genreList
            }>
            <NavLink
                key={0}
                to={`/`}>
                <p>{'All genres'}</p>
            </NavLink>
            {genres.map(genre => <NavLink
                key={genre.id}
                to={`/${genre.slug}`}>
                <p>{genre.name}</p>
            </NavLink>)}
        </div>

    );
}

export default GenreList;