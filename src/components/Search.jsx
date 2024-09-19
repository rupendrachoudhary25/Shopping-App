import React, { useState, useContext } from "react";
import { ecomContext } from "../Home";

function Search() {
  const { setSearchTerm, setCategory, setCompany, setSortOption } =
    useContext(ecomContext);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setCategory("all");
    setCompany("all");
    setSortOption("a-z");
    document.getElementById("myForm").reset();
  };

  return (
    <div className="search">
      <form id="myForm">
        <label htmlFor="input">Search Products</label>
        <br />
        <input type="text" id="input" onChange={handleSearchInput} />
        <br />
        <label htmlFor="select1">Search Category</label>
        <br />
        <select id="select1" name="select1" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="tables">Tables</option>
          <option value="chair">Chair</option>
          <option value="kids">Kids</option>
          <option value="sofas">Sofas</option>
          <option value="beds">Beds</option>
        </select>
        <br />
        <label htmlFor="select2">Select Company</label>
        <br />
        <select id="select2" name="select2" onChange={handleCompanyChange}>
          <option value="all">All</option>
          <option value="modenza">Modenza</option>
          <option value="luxora">Luxora</option>
          <option value="artifex">Artifex</option>
          <option value="comfora">Comfora</option>
          <option value="homestead">Homestead</option>
        </select>
        <br />
        <label htmlFor="select3">Sorted by</label>
        <br />
        <select id="select3" name="select3" onChange={handleSortChange}>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
          <option value="low-high">low-high</option>
          <option value="high-low">high-low</option>
        </select>
        <br />
        <button type="button" onClick={handleClearFilter}>
          Clear Filter
        </button>
      </form>
    </div>
  );
}

export default Search;
