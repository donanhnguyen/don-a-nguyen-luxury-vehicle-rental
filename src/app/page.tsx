"use client";
import Image from 'next/image'
import Nav from './nav'
import React, {useState, ChangeEvent} from 'react';
import vehicleListings from './data';

type VehicleListingProps = {
    name: string,
    price: number,
    imageUrl: string,
    capacity: number,
    type: string,
    unavailableDates: string[]
}

const VehicleListingCard: React.FC<{ vehicleListing: VehicleListingProps }> = ({
  vehicleListing,
}) => {
  return (
    <div className="border p-4 mb-4">
      <h3>{vehicleListing.name}</h3>
      <p>Price: ${vehicleListing.price} per hour</p>
      <p>Capacity: {vehicleListing.capacity} people</p>
      <p>Type: {vehicleListing.type}</p>
      <Image 
        alt={vehicleListing.name} 
        src={vehicleListing.imageUrl}
        width={300}
        height={300}
      />
    </div>
  );
};

export default function Home() {

  const [eventDate, setEventDate] = useState<string>('');
  const [vehicleType, setVehicleType] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [groupSize, setGroupSize] = useState<number | ''>('');

  const handleEventDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventDate(event.target.value);
  };

  const handleVehicleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleType(event.target.value);
  };

  const handleEventTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEventType(event.target.value);
  };

  const handleGroupSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGroupSize(Number(event.target.value));
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

  return (
    <main className="">

      <Nav />

      {/* container div */}
      <div className="flex mx-auto w-full md:w-3/5">

        {/* search filters section */}
        <div id='searchFilters' className="flex flex-col gap-4 w-2/4 p-4 bg-gray-200">
            <h2>Search Filters</h2>

            <label htmlFor="eventDate">Event Date:</label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={handleEventDateChange}
              min={getCurrentDate()}
            />

            <label htmlFor="vehicleType">Vehicle Type:</label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={handleVehicleTypeChange}
            >
              <option value="">Select vehicle type</option>
              <option value="Sedan">Sedan</option>
              <option value="Limo">Limo</option>
              <option value="SUV">SUV</option>
              <option value="Shuttle">Shuttle</option>
            </select>

            <label htmlFor="eventType">Event Type:</label>
            <select
              id="eventType"
              value={eventType}
              onChange={handleEventTypeChange}
            >
              <option value="">Select event type</option>
              <option value="birthday">Birthday</option>
              <option value="bachelorParty">Bachelor Party</option>
              <option value="wedding">Wedding</option>
            </select>

            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value="Austin, TX"
              readOnly
            />

            <label htmlFor="groupSize">Group Size:</label>
            <input
              type="number"
              id="groupSize"
              value={groupSize}
              onChange={handleGroupSizeChange}
            />
            
        </div>

        {/* search results based on filters */}
        <div id="searchResults" className="w-2/4">
          {/* Search results based on filters */}
            <div className="grid grid-cols-2 gap-4">
              {vehicleListings.map((vehicleListing, index) => (
                <VehicleListingCard key={index} vehicleListing={vehicleListing} />
              ))}
            </div>
        </div>

      </div>
    </main>
  )
}
