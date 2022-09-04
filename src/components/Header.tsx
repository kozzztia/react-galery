import React from 'react';
import { headerPropsTypes} from "../types/types";
import styles from './header.module.css'
import SearchInput from "../ui/SearchInput";
import SearchBtn from "../ui/SearchBtn";
import MenuBtn from "../ui/MenuBtn";

function Header({className , name , slug}:headerPropsTypes){
    return (
    <div className={className} >
        <MenuBtn className={styles.menuBtn} name={"menu"} />
        <h2 className={styles.searchTitle}>Genre: {name}</h2>
        <div className={styles.searchForm} >
            <SearchInput className={styles.searchInput}/>
            <SearchBtn className={styles.searchBtn} slug={slug}/>
        </div>
    </div>
    );
}

export default Header;
