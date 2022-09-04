import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useTypedSelector} from "../store/hooks/hooks";
import MainPage from "./MainPage";


function GenreRoutes() {
    const genres = useTypedSelector(state => state.genres);
    return (
        <div>
            <Routes>

                <Route path='/' element={<MainPage name={"All games"}
                                                   slug={"action"}
                                                   id={0}
                                                   games={null}
                                                   games_count = {null}
                                                   image_background ={"https://wallpaperaccess.com/full/242388.jpg"}/>} />
                {
                    genres.map(genre =>
                        (<Route
                        key={genre.id}
                        path={`/${genre.slug}`}
                        element={<MainPage name={genre.name}
                                           slug={genre.slug}
                                           id={genre.id}
                                           games={genre.games}
                                           games_count = {genre.games_count}
                                           image_background ={genre.image_background}
                        />}/>
                        )
                    )
                }

            </Routes>
        </div>
    );
}

export default GenreRoutes;