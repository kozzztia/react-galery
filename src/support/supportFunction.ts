


//api function   param-genre/games  paramGame- genre=action |none
import axios from "axios";

export const createUrl = (param : string, paramGame : string | null = null , pageSize: number = 20)  : string =>{
    return (`https://api.rawg.io/api/${param}?key=3719d7855af54634ad3aa19763652ea2&${paramGame}&${pageSize}`)
}

// export const create = ():void=> {
//     axios.get("https://api.rawg.io/api/genres?key=3719d7855af54634ad3aa19763652ea2",{withCredentials:true})
//         .then(response => console.log(response))
// }

export const creteSearchUrl =(slug :string , searchValue:string) :string =>{
    return (`https://api.rawg.io/api/games?genres=${slug}&key=3719d7855af54634ad3aa19763652ea2&page_size=12&search=${searchValue}`)
}

