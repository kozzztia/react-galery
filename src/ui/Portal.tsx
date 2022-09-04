import React, {useEffect} from 'react';
import {ActionsTypesEnum} from "../types/types";
import {useTypedSelector} from "../store/hooks/hooks";
import styles from "./modal.module.css"
import {useDispatch} from "react-redux";
import Modal from "./Modal";
import {InView} from "react-intersection-observer";



const  Portal = () => {
    const {modalFlag} = useTypedSelector (state => state);
    const dispatch = useDispatch()
    if(modalFlag){
        return (
            // <div className={`${styles.portal}`}
            //      onClick ={(event)=>{
            //          dispatch({type : ActionsTypesEnum.GET_MODAL_FLAG_VALUE , payload: !modalFlag})
            //      }}
            // >
            //     <button className={styles.btn}
            //         onClick ={(event)=>{
            //         dispatch({type : ActionsTypesEnum.GET_MODAL_FLAG_VALUE , payload: !modalFlag})
            //     }}>
            //         <img src="https://cdn0.iconfinder.com/data/icons/web-app-ui-1/64/menu-preset-interface-ui_icon-49-512.png" alt={""}/>
            //     </button>
            //     <Modal className={styles.modal}/>
            // </div>
        <InView
            as="div"
            className={`${styles.portal}`}
            onClick ={(event)=>{
                dispatch({type : ActionsTypesEnum.GET_MODAL_FLAG_VALUE , payload: !modalFlag})
            }}
            onChange={(inView, entry) => inView?
                entry.target.classList.add(styles.portalOpen)
                :
                null
                }>
            <button className={styles.btn}
                    onClick ={(event)=>{
                        dispatch({type : ActionsTypesEnum.GET_MODAL_FLAG_VALUE , payload: !modalFlag})
                        dispatch({type: ActionsTypesEnum.GET_GAME , payload: {}})
                    }}>
                <img
                    src="https://cdn0.iconfinder.com/data/icons/web-app-ui-1/64/menu-preset-interface-ui_icon-49-512.png"
                    alt={""}/>
            </button>
            <Modal className={styles.modal}/>
        </InView>
        );
    }else{
        return null
    }
}

export default Portal;