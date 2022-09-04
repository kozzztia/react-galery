import React, {useEffect} from "react";
import {useActions, useTypedSelector} from "../store/hooks/hooks";
import GameDescription from "./GameDescription";


export interface modalInterface {
    className?: string | undefined,
}

const  Modal:React.FC<modalInterface> = ({className}) => {
    const {modalGame,game} = useTypedSelector (state => state);
    const {fetchGame} = useActions()

    useEffect(()=>{

            document.body.className=("unScroll")
            fetchGame(modalGame)
        return()=>{
            document.body.className=("")
        }
    },[modalGame])
        return (
            <div className={className}
                 onClick ={(event)=>{
                    event.stopPropagation()
                 }}>

                <GameDescription {...game} />
            </div>
        );
}

export default Modal;