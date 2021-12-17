import "./Styles.css";
import { useState } from "react";
import SearchBox from "../../components/SearchBox";
import data from "../../data/users.json";
import ResultSearch from "../../components/resultSearch";
export const Search = () => {
  const [showNoFount,setShowNotFount]= useState("");
  const [userData] = useState(data);
  const [results, setResults] = useState([]);
  const clearResult = () => setResults([]);
  const handleSearch = (searchText) => {
    setShowNotFount(searchText);
    const dataResult = userData.filter((value) => {
      return value.name.toLowerCase().includes(searchText);
    });
    setResults(dataResult);
  };

  const [isSearching, setIsSearching] = useState(false);
  const inputTop = (boolean) => setIsSearching(boolean);
  return (
    <div className={isSearching ? "container-top" : "container-bottom"}>
      <div className="row">
        <SearchBox
          onClearResult={clearResult}
          onHandleSearch={handleSearch}
          onInputTop={inputTop}
          isSearchTop={isSearching}
        />
      </div>
       <ResultSearch stateSearch={showNoFount} dataResultSearch={results} />
    </div>
  );
};
export default Search;
