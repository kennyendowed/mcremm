import React, { useState } from "react";

const Search = ({ onSearch, width }) => {
    const [search, setSearch] = useState("");

    const onInputChange = value => {
        setSearch(value);
        onSearch(value);
    };
    const componentWidth = !width ? "240px" : width; 
    return (
        
        <input
            type="text"
            className="form-control"

            style={{ width : componentWidth }}
            placeholder="Search"
            value={search}
         
             onChange={(e) =>  { onInputChange(e.target.value.toLowerCase()) } }
        />
    );
};

export default Search;
