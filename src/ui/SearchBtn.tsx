import styles from "../components/header.module.css";
import React, {useEffect} from "react";
import {searchType} from "../types/types";
import {useActions, useTypedSelector} from "../store/hooks/hooks";
function SearchInput ({className }:searchType): JSX.Element{
 const {searchValue , slug} = useTypedSelector(state =>state)
 const {searchGames} = useActions()
    useEffect(()=>{
        if(searchValue.length > 2 || searchValue.length == 0){
            searchGames(slug,searchValue)
        }
    },[searchValue])

    return (
        <button className={className}
        onClick={()=>{
            searchGames(slug,searchValue)
        }}>
            <img className={styles.searchImg}src="https://w7.pngwing.com/pngs/892/561/png-transparent-search-magnifier-magnify-geosm-e-commerce-px-icon.png" alt="search"/>
        </button>

    );
}

export default SearchInput;