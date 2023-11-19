// DateRangeSelector.js
import React, { useState } from 'react';

function DateRangeSelector() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (event) => {
    // Handle changes to start and end date
  };

  const handleApplyFilters = () => {
    // Apply filters based on selected date range
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Date Range Selector</h2>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          className="mt-1 p-2 border border-gray-300 rounded-md"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
}

export default DateRangeSelector;
