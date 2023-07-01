import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../Components/Navbar';

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic or API call here
    console.log('Booking submitted:', name, email, startDate, endDate);
    // Reset form fields
    setName('');
    setEmail('');
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <div>
      <Navbar/>
    <div className="mt-4 ">
      <h1 className="text-2xl font-bold text-center mb-6">Booking Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-evenly">
        <div className="mb-4">
          <label className="block font-bold mb-1">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="Select start date"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-1">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            minDate={startDate}
            isClearable
            placeholderText="Select end date"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Booking;
