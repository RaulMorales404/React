import './Styles.css'
import { useState } from 'react';
import SearchBox from "../../components/SearchBox/SearchBox";
export const Search = () => {
    const [isSearching,setIsSearching] = useState(false);
    const inputTop = (boolean) => {
        setIsSearching(boolean);
    }
    return(
        <div className={isSearching? "container-top":"containerSearch"}>
            <div className='row'>
            <SearchBox action={inputTop} stateSearch={isSearching}/>
            </div>
          
        </div>
    ) 

}
export default Search;