// components/UpcomingMatches.js
"use client"
import React from 'react';

const UpcomingMatches = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-black mb-6">Upcoming Matches</h3>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {/* Match Card 1 */}
          <div className="min-w-[280px] bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-black">Football: Team A vs Team B</h4>
            <p className="text-gray-500 text-sm mt-2">October 15, 2023</p>
          </div>
          {/* Match Card 2 */}
          <div className="min-w-[280px] bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-black">Basketball: Team X vs Team Y</h4>
            <p className="text-gray-500 text-sm mt-2">October 16, 2023</p>
          </div>
          {/* Match Card 3 */}
          <div className="min-w-[280px] bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-black">Tennis: Player 1 vs Player 2</h4>
            <p className="text-gray-500 text-sm mt-2">October 17, 2023</p>
          </div>
          {/* Add more match cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMatches;