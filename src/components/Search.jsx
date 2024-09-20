import React from "react";

function Search({
  selectedCategory,
  selectedCompany,
  searchTerm,
  selectOptions,
  selectCompany,
  handleSearchChange,
  handleChangeCategory,
  handleChangeCompany,
  handleClearFilters,
}) {
  return (
    <div className="search">
      <form id="myForm">
        <label htmlFor="input">Search Products</label>
        <input
          type="text"
          id="input"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Products"
        />

        <label htmlFor="select1">Search Category</label>

        <select
          id="select1"
          value={selectedCategory}
          onChange={handleChangeCategory}
          name="select1"
        >
          {selectOptions.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <label htmlFor="select2">Select Company</label>

        <select
          id="select2"
          value={selectedCompany}
          onChange={handleChangeCompany}
          name="select2"
        >
          {selectCompany.map((item, index) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <button type="button" onClick={handleClearFilters}>
          Clear Filters
        </button>
      </form>
    </div>
  );
}

export default Search;
