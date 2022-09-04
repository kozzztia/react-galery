import React from 'react';
import {useTypedSelector} from "../store/hooks/hooks";
import {useDispatch} from "react-redux";
import {ActionsTypesEnum, searchType} from "../types/types";

function SearchInput ({className}:searchType): JSX.Element{
    const searchValue = useTypedSelector< string >(state => state.searchValue)
    const dispatch = useDispatch()

    return (
        <>
            <input className={className}
                       onChange={(e)=> {
                           dispatch({
                               type: ActionsTypesEnum.CHANGE_SEARCH_VALUE,
                               payload : e.target.value,
                           })
                       }
                       }
                   value={searchValue}
                   type="text"/>
        </>
    );
}

export default SearchInput;

