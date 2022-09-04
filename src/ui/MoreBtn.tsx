import React from 'react';
import {ActionsTypesEnum, modalType} from "../types/types";
import {useActions} from "../store/hooks/hooks";
import {useDispatch} from "react-redux";


function MoreBtn ({slug, name ,className ,id , short_screenshots} :modalType){
    const {getFlagAndGame} = useActions()
    const dispatch = useDispatch()
    return (

        <button className={className}
            onClick={()=>{
                dispatch({type: ActionsTypesEnum.GET_SCREENSHOTS ,  payload: short_screenshots})
                getFlagAndGame(id as number)
                dispatch({type: ActionsTypesEnum.GET_HIDE_MENU_VALUE , payload : true})
        }}>
                <h4>{name}</h4>
        </button>
    );
}

export default MoreBtn;