import React from 'react';
import {ActionsTypesEnum, headerPropsTypes} from "../types/types";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../store/hooks/hooks";

function MenuBtn({className , name}:headerPropsTypes){
    const dispatch = useDispatch()
    const {hideMenu} = useTypedSelector (state => state)
    return (
            <button className={className}
            onClick ={()=>{
                dispatch({type: ActionsTypesEnum.GET_HIDE_MENU_VALUE , payload : !hideMenu})
            }}
            >
                {
                    hideMenu?
                        <img src="https://freesvg.org/img/menu-icon.png" alt={name}/>
                        :
                        <img src="https://cdn0.iconfinder.com/data/icons/web-app-ui-1/64/menu-preset-interface-ui_icon-49-512.png" alt={name}/>
                }

            </button>
    );
}

export default MenuBtn;