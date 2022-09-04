import {applyMiddleware , legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {ActionsTypesEnum, AllActionTypes, gameInterface, InitialStoreTypesInterface} from "../types/types";




const initialStore : InitialStoreTypesInterface = {
    genres: [],
    loading: false,
    gameLoading: false,
    error: null,
    games: [],
    searchValue: "",
    nextPage: "",
    hideMenu: true,
    slug: "",
    modalFlag: false,
    modalGame: 0,
    game: {} as gameInterface,
    screenshots: []
}


export const rootReducer = (state = initialStore, action : AllActionTypes) => {
    switch (action.type) {
        case ActionsTypesEnum.CHANGE_LOADER_VALUE:
            return {
                ...state,
                loading: action.payload,
            }
        case ActionsTypesEnum.GET_GENRES:
            return {
                ...state,
                genres: [...action.payload],
            }
            case ActionsTypesEnum.GET_ERROR:
            return {
                ...state,
                error: action.payload,
            }
            case ActionsTypesEnum.GET_GAMES:
            return {
                ...state,
                games: [...action.payload],
            }
            case ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE:
            return {
                ...state,
                gameLoading: action.payload,
            }
            case ActionsTypesEnum.CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload,
            }
            case ActionsTypesEnum.CHANGE_NEXT_PAGE_VALUE:
            return {
                ...state,
                nextPage: action.payload,
            }
            case ActionsTypesEnum.GET_NEXT_GAMES:
            return {
                ...state,
                games: [...state.games, ...action.payload],
            }
            case ActionsTypesEnum.GET_HIDE_MENU_VALUE:
            return {
                ...state,
                hideMenu: action.payload,
            }
            case ActionsTypesEnum.SEARCH_GAMES:
            return {
                ...state,
                games: [...action.payload],
            }
            case ActionsTypesEnum.GET_SLUG:
            return {
                ...state,
                slug: action.payload,
            }
            case ActionsTypesEnum.GET_MODAL_FLAG_VALUE:
            return {
                ...state,
                modalFlag: action.payload,
            }
            case ActionsTypesEnum.GET_MODAL_GAME_VALUE:
            return {
                ...state,
                modalGame: action.payload,
            }
            case ActionsTypesEnum.GET_GAME:
            return {
                ...state,
                game: action.payload,
            }
            case ActionsTypesEnum.GET_SCREENSHOTS:
            return {
                ...state,
                screenshots: action.payload,
            }
        default:
            return state
    }
}
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
