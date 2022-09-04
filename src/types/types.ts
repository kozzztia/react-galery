

export interface InitialStoreTypesInterface {
    genres: genreInterface[],
    loading: boolean,
    error: string | null,
    games: GamesInterface[],
    gameLoading : boolean;
    searchValue: string,
    nextPage: string,
    hideMenu: boolean,
    slug: string,
    modalFlag: boolean;
    modalGame: number;
    game: gameInterface;
    screenshots : screenshotsTypes[];

}
export interface GamesInterface {
    index:number;
    slug :string,
    name : string,
    playtime?: number,
    platforms: any[],
    stores?: any[] ,
    released : string,
    tba?: boolean,
    background_image : string,
    rating: number,
    rating_top?: number,
    ratings?: any[],
    ratings_count?: number,
    reviews_text_count?: number,
    added?:number,
    added_by_status?:number[],
    metacritic?:number,
    suggestions?:number,
    updated?:string,
    id:number,
    score?:null|any,
    clip?:null|any,
    tags?:any[],
    esrb_rating?:any[],
    user_game?:null|any,
    reviews_count?:number,
    saturated_color?:string,
    dominant_color?:string,
    short_screenshots: screenshotsTypes[],
    parent_platforms?:any[],
    genres?:any[],
}
export type headerPropsTypes ={
    className: string,
    name: string,
    slug?: string,
}
export type screenshotsTypes = {
    id:number,
    image: string,
}


export enum ActionsTypesEnum {
    CHANGE_LOADER_VALUE = "CHANGE_LOADER_VALUE",
    CHANGE_GAME_LOADER_VALUE = "CHANGE_GAME_LOADER_VALUE",
    GET_GENRES = "GET_GENRES",
    GET_ERROR = "GET_ERROR",
    GET_GAMES = "GET_GAMES",
    CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE",
    CHANGE_NEXT_PAGE_VALUE = "CHANGE_NEXT_PAGE_VALUE",
    GET_NEXT_GAMES = "GET_NEXT_GAMES",
    GET_HIDE_MENU_VALUE = "GET_HIDE_MENU_VALUE",
    SEARCH_GAMES = "SEARCH_GAMES",
    GET_SLUG = "GET_SLUG",
    GET_MODAL_FLAG_VALUE = "GET_MODAL_FLAG_VALUE",
    GET_MODAL_GAME_VALUE = "GET_MODAL_GAME_VALUE",
    GET_GAME = "GET_GAME",
    GET_SCREENSHOTS = "GET_SCREENSHOTS",

}
interface ChangeLoaderValueActionTypesInterface {
    type : ActionsTypesEnum.CHANGE_LOADER_VALUE;
    payload : boolean;
}
interface GetGenresActionTypesInterface {
    type : ActionsTypesEnum.GET_GENRES;
    payload : genreInterface[];
}
interface GetErrorActionTypesInterface {
    type : ActionsTypesEnum.GET_ERROR;
    payload : string | null;
}interface GetGamesActionTypesInterface {
    type : ActionsTypesEnum.GET_GAMES;
    payload : any[];
}interface ChangeGameLoaderValueActionTypesInterface {
    type : ActionsTypesEnum.CHANGE_GAME_LOADER_VALUE;
    payload : boolean;
}interface ChangeSearchValueActionTypesInterface {
    type : ActionsTypesEnum.CHANGE_SEARCH_VALUE;
    payload : string;
}interface ChangeNextPageActionTypesInterface {
    type : ActionsTypesEnum.CHANGE_NEXT_PAGE_VALUE;
    payload : string;
}interface GetNextGamesActionTypesInterface {
    type : ActionsTypesEnum.GET_NEXT_GAMES;
    payload : any[];
}interface GetHideMenuValueActionTypesInterface {
    type : ActionsTypesEnum.GET_HIDE_MENU_VALUE;
    payload : boolean;
}interface SearchGamesActionTypesInterface {
    type : ActionsTypesEnum.SEARCH_GAMES;
    payload : any[];
}interface GetSlugActionTypesInterface {
    type : ActionsTypesEnum.GET_SLUG;
    payload : string;
}interface GetModalFlagActionTypesInterface {
    type : ActionsTypesEnum.GET_MODAL_FLAG_VALUE;
    payload : boolean;
}interface GetModalGameActionTypesInterface {
    type : ActionsTypesEnum.GET_MODAL_GAME_VALUE;
    payload : number;
}interface GetGameActionTypesInterface {
    type : ActionsTypesEnum.GET_GAME;
    payload : gameInterface;
}interface GetScreenshotsActionTypesInterface {
    type : ActionsTypesEnum.GET_SCREENSHOTS;
    payload : screenshotsTypes[];
}
export interface genreInterface{
    games: [] |null,
    games_count: number | null,
    id: number,
    image_background: string,
    name: string,
    slug: string,
}
export type searchType = {
    className?:string,
    slug?:string,
    name?:string,
}
export type modalType = {
    className?:string,
    slug?:string,
    name?:string,
    id?:number,
    short_screenshots?:screenshotsTypes[]
}
export interface gameInterface {
    id:number,
    slug?:string,
    name?:string,
    description_raw?:string,
    released?:string,
    background_image?:string,
    website?:string,
    rating?:number,
}
export interface sliderPropsInterface {
    className: string;
    screenshots: screenshotsTypes[];
}

export type AllActionTypes =
    ChangeLoaderValueActionTypesInterface
    | GetGenresActionTypesInterface
    | GetErrorActionTypesInterface
    | GetGamesActionTypesInterface
    | ChangeGameLoaderValueActionTypesInterface
    | ChangeSearchValueActionTypesInterface
    | ChangeNextPageActionTypesInterface
    |GetNextGamesActionTypesInterface
    |GetHideMenuValueActionTypesInterface
    |SearchGamesActionTypesInterface
    |GetSlugActionTypesInterface
|GetModalFlagActionTypesInterface
|GetModalGameActionTypesInterface
|GetGameActionTypesInterface
|GetScreenshotsActionTypesInterface