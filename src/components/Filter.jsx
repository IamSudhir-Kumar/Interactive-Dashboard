// Filters.js
import React, { useState } from 'react';
import * as d3 from 'd3';

function Filters({ updateFilters }) {
  const [ageFilter, setAgeFilter] = useState(null);
  const [genderFilter, setGenderFilter] = useState(null);

  const handleAgeChange = (event) => {
    setAgeFilter(event.target.value);
    updateFilters({ age: event.target.value, gender: genderFilter });
  };

  const handleGenderChange = (event) => {
    setGenderFilter(event.target.value);
    updateFilters({ age: ageFilter, gender: event.target.value });
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Filters</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleAgeChange}
          value={ageFilter}
        >
          <option value="">All Ages</option>
          <option value="15-25">15-25</option>
          <option value=">25">Greater than 25</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <select
          className="mt-1 p-2 border border-gray-300 rounded-md"
          onChange={handleGenderChange}
          value={genderFilter}
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
