import axios from 'axios';

const HotelSearch = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const searchHotels = async () => {
    const response = await axios.post('https://api.duffel.com/stays/availability', {
      headers: {
        'Accept': 'application/json',
        'Duffel-Version': 'beta',
        'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`
      },
      data: {
        "check_in": checkIn,
        "check_out": checkOut,
        "location": {
          "type": "city",
          "iata_code": destination
        },
        "guests": [
          {
            "type": "adult"
          }
        ],
        "rooms": 1
      }
    });

    console.log(response.data);
  }

  return (
    <div>
      <input type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
      <input type="date" placeholder="Check-In" onChange={(e) => setCheckIn(e.target.value)} />
      <input type="date" placeholder="Check-Out" onChange={(e) => setCheckOut(e.target.value)} />
      <button onClick={searchHotels}>Search</button>
    </div>
  )
}

export default HotelSearch;

import React, { useState } from 'react';
import axios from 'axios';

const HotelSearch = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const searchHotels = async () => {
    const response = await axios.post('https://api.duffel.com/stays/availability', {
      headers: {
        'Accept': 'application/json',
        'Duffel-Version': 'beta',
        'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`
      },
      data: {
        "check_in": checkIn,
        "check_out": checkOut,
        "location": {
          "type": "city",
          "iata_code": destination
        },
        "guests": [
          {
            "type": "adult"
          }
        ],
        "rooms": 1
      }
    });

    console.log(response.data);
  }

  return (
    <div>
      <p>Destination</p>
      <input type="text" placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />
      <p>Check-In</p>
      <input type="date" placeholder="Check-In" onChange={(e) => setCheckIn(e.target.value)} />
      <p>Check-Out</p>
      <input type="date" placeholder="Check-Out" onChange={(e) => setCheckOut(e.target.value)} />
      <button onClick={searchHotels}>Search</button>
    </div>
  )
}

export default HotelSearch;