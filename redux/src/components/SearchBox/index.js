import { useState } from "react";
import "./Style.css";
import CustomButtons from "./CustomButtons";
export const SearchBox = ({ action, stateSearch }) => {
  const [searchText, setSearchText] = useState("");
  const searchPeople = () => {
    action(true);
  };
  const searchClose = () => {
    setSearchText("");
    action(false);
  };
  return (
    <div className="container">
      {!stateSearch && <h2 className="title"> Search People </h2>}
      <div className={stateSearch ? "row" : "row-none"}>
        <input
          className="input"
          value={searchText}
          onChange={({ target: { value } }) =>setSearchText(value)}
        />
        <CustomButtons className="button" action={searchPeople} text="Search" />
        <CustomButtons className="button-close" action={searchClose} text="Cloce" />
      </div>
    </div>
  );
};
export default SearchBox;
