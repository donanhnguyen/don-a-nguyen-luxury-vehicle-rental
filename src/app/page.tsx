"use client";
import Nav from './nav'
import React, {useState, ChangeEvent, useEffect} from 'react';
import vehicleListings from './data';
import VehicleListingCard from './VehicleListingCard';
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  // states
  
  const [eventDate, setEventDate] = useState<string>();
  const [vehicleType, setVehicleType] = useState<string>();
  const [eventType, setEventType] = useState<string>();
  const [sortBy, setSortBy] = useState<string>();
  const [groupSize, setGroupSize] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();

  // event handlers to change state
  const handleEventDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventDate(event.target.value);
  };

  const handleVehicleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleType(event.target.value);
  };

  const handleEventTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventType(event.target.value);
  };

  const handleSortByChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleGroupSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroupSize(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = (today.getMonth() + 1).toString();
    let day = today.getDate().toString();

    if (month.length === 1) {
      month = '0' + month;
    }
    if (day.length === 1) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  // display all search results
  const displaySearchResults = () => {

    var resultsAfterFilters = vehicleListings;
   
    // applying all filters

    if (eventDate) {
      resultsAfterFilters = resultsAfterFilters.filter((vehicleListing) => {
        return !vehicleListing.unavailableDates.includes(eventDate)
      })
    }
    
    if (vehicleType) {
      resultsAfterFilters = resultsAfterFilters.filter((vehicleListing) => {
        return vehicleListing.type === vehicleType;
      })
    }

    if (groupSize) {
      resultsAfterFilters = resultsAfterFilters.filter((vehicleListing) => {
        return vehicleListing.capacity >= groupSize;
      })
    }

    if (maxPrice) {
      resultsAfterFilters = resultsAfterFilters.filter((vehicleListing) => {
        return vehicleListing.price <= maxPrice;
      })
    }

    if (sortBy) {
      if (sortBy === "Price: Low to High") {
        resultsAfterFilters = resultsAfterFilters.sort((a, b) => a.price - b.price)
      } else if (sortBy === "Price: High to Low") {
        resultsAfterFilters = resultsAfterFilters.sort((a, b) => b.price - a.price)
      }
    }

    // display the results after all filters applied:

    return resultsAfterFilters.map((vehicleListing, index) => (
      <VehicleListingCard key={index} vehicleListing={vehicleListing} />
    ))

  }

  return (
    <main className="">

      {/* Nav Bar */}
      <Nav />
     
      {/* container div */}
      <div className="flex mx-auto w-full md:w-3/5 mt-24">
 
        {/* search filters section */}
        <div id='searchFilters' className="flex flex-col gap-4 w-2/4 p-4 bg-gray-200 mr-2">
            <h2 className='text-3xl font-bold text-center mb-6'>Search Filters</h2>

            <label htmlFor="eventDate" className="text-xl text-black-700">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={handleEventDateChange}
              min={getCurrentDate()}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="vehicleType" className="text-xl text-black-700">Vehicle Type:</label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">No Filter</option>
              <option value="Sedan">Sedan</option>
              <option value="Limo">Limo</option>
              <option value="SUV">SUV</option>
              <option value="Shuttle">Shuttle</option>
            </select>

            <label htmlFor="eventType" className="text-xl text-black-700">Event Type:</label>
            <select
              id="eventType"
              value={eventType}
              onChange={handleEventTypeChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">No Filter</option>
              <option value="birthday">Birthday</option>
              <option value="bachelorParty">Bachelor Party</option>
              <option value="wedding">Wedding</option>
            </select>

            <label htmlFor="location" className="text-xl text-black-700">Location:</label>
            <input
              type="text"
              id="location"
              value="Austin, TX"
              readOnly
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="groupSize" className="text-xl text-black-700">Group Size:</label>
            <input
              type="number"
              id="groupSize"
              value={groupSize}
              onChange={handleGroupSizeChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="priceMax" className="text-xl text-black-700">Max Price Per Hour:</label>
            <input
              type="number"
              id="priceMax"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="sortBy" className="text-xl text-black-700">Sort By:</label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={handleSortByChange}
              className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value=""></option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
            
        </div>

        {/* search results based on filters */}
        <div id="searchResults" className="w-2/4 ml-2">
          
          <h1 className="text-3xl font-bold text-center mb-6">{displaySearchResults().length} Results:</h1>
          {/* Search results based on filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* display them */}
              {displaySearchResults()}

            </div>
        </div>

      </div>
    </main>
  )
}
