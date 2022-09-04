import {ActionsTypesEnum, AllActionTypes} from "../../types/types";
import {Dispatch} from "react";
import axios  from "axios";
import {createUrl, creteSearchUrl} from "../../support/supportFunction";





export const fetchGenres = (param : string)=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : true})
            const response = await axios.get(createUrl("genres"))
            const genres = response.data.results;
            dispatch({type: ActionsTypesEnum.GET_GENRES , payload: genres})
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_LOADER_VALUE , payload : false})
            dispatch({type: ActionsTypesEnum.GET_ERROR , payload : `${e}`})
        }
    }
}
export const fetchGames = (genre : string, pageSize : number)=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : true} )
            const response = await axios.get(createUrl("games" , `genres=${genre}&page_size=${pageSize}`))
            const next = response.data.next;
            dispatch({type: ActionsTypesEnum.GET_GAMES , payload: response.data.results})
            dispatch({type: ActionsTypesEnum.CHANGE_NEXT_PAGE_VALUE , payload: next})
            dispatch({type: ActionsTypesEnum.GET_SLUG , payload: genre})
            dispatch({type: ActionsTypesEnum.CHANGE_SEARCH_VALUE , payload: ""})
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
            dispatch({type: ActionsTypesEnum.GET_ERROR , payload : `${e}`})
        }
    }
}
export const fetchNewGames = (nextPage :string)=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : true} )
            const response = await axios.get(nextPage)
            dispatch({type: ActionsTypesEnum.GET_NEXT_GAMES , payload: response.data.results})
            dispatch({type: ActionsTypesEnum.CHANGE_NEXT_PAGE_VALUE , payload: response.data.next})
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }
    }
}
export const searchGames = (slug :string , searchValue : string )=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : true} )
            const response = await axios.get(creteSearchUrl(slug, searchValue))
            const next = response.data.next;
            dispatch({type: ActionsTypesEnum.SEARCH_GAMES , payload: response.data.results})
            dispatch({type: ActionsTypesEnum.CHANGE_NEXT_PAGE_VALUE , payload: response.data.next})
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }
    }
}

export const getFlagAndGame = (id:number)=>{
    return (dispatch : Dispatch<AllActionTypes>) =>{
            dispatch({type: ActionsTypesEnum.GET_MODAL_FLAG_VALUE , payload : true} )
            dispatch({type: ActionsTypesEnum.GET_MODAL_GAME_VALUE , payload : id} )
    }
}

export const fetchGame = (id:number)=>{
    return async (dispatch : Dispatch<AllActionTypes>) =>{
        try{
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : true} )
            const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=3719d7855af54634ad3aa19763652ea2`)
            dispatch({type: ActionsTypesEnum.GET_GAME , payload: response.data})
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }catch (e){
            dispatch({type: ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE , payload : false})
        }
    }
}


