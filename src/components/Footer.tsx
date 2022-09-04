
import React from 'react';
import {useActions, useTypedSelector} from "../store/hooks/hooks";
import { InView } from 'react-intersection-observer'

const Footer: React.FC = (): JSX.Element=> {
    const {fetchNewGames} = useActions()
    const gameLoading:boolean = useTypedSelector(state => state.gameLoading)
    const nextPage:string =  useTypedSelector(state => state.nextPage)
    if(gameLoading)return(
        <div>
            <h2>Loading....</h2>
        </div>
    )
    return (
        <InView
            as="div"
            onChange={(inView, entry) => inView?
                fetchNewGames(nextPage)
                :
                <h2>Loading....</h2>}>

            <h3 style={{textAlign : "center"}}>Used React.js, Redux, TS and
                https://rawg.io/as api
            </h3>
        </InView>
    );
}
    export default Footer;
