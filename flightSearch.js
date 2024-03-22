
</p><pre><code>
import React, { useState } from 'react';
import axios from 'axios';
import FlightResults from '/flightResults';

const FlightSearch = () =&gt; {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [outbound, setOutbound] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);

  const searchFlights = async () =&gt; {
    try {
      const response = await axios.post('Duffel_API_URL', {
        origin: origin,
        destination: destination,
        outbound: outbound,
        return: returnDate
      });
      setFlights(response.data);
    } catch (error) {
      console.error('Error searching for flights:', error);
    }
  };

  return (
    &lt;div&gt;
      &lt;input type="text" placeholder="Origin" value={origin} onChange={(e) =&gt; setOrigin(e.target.value)} /&gt;
      &lt;input type="text" placeholder="Destination" value={destination} onChange={(e) =&gt; setDestination(e.target.value)} /&gt;
      &lt;input type="date" placeholder="Outbound" value={outbound} onChange={(e) =&gt; setOutbound(e.target.value)} /&gt;
      &lt;input type="date" placeholder="Return" value={returnDate} onChange={(e) =&gt; setReturnDate(e.target.value)} /&gt;
      &lt;button onClick={searchFlights}&gt;Search Flights&lt;/button&gt;
      {flights.length &gt; 0 && &lt;FlightResults flights={flights} /&gt;}
    &lt;/div&gt;
  );
};

export default FlightSearch;
</code></pre><p></p>