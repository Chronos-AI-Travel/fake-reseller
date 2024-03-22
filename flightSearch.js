
</p><pre><code>
import React, { useState } from 'react';
import FlightResults from '/flightResults';

const FlightSearch = () =&gt; {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [outbound, setOutbound] = useState('');
  const [returnDate, setReturnDate] = useState('');
  
  const handleSearch = () =&gt; {
    // Implement Duffel API integration here
  };

  return (
    &lt;div&gt;
      &lt;input type="text" placeholder="Origin" value={origin} onChange={(e) =&gt; setOrigin(e.target.value)} /&gt;
      &lt;input type="text" placeholder="Destination" value={destination} onChange={(e) =&gt; setDestination(e.target.value)} /&gt;
      &lt;input type="date" placeholder="Outbound" value={outbound} onChange={(e) =&gt; setOutbound(e.target.value)} /&gt;
      &lt;input type="date" placeholder="Return" value={returnDate} onChange={(e) =&gt; setReturnDate(e.target.value)} /&gt;
      &lt;button onClick={handleSearch}&gt;Search&lt;/button&gt;
      &lt;FlightResults /&gt;
    &lt;/div&gt;
  );
};

export default FlightSearch;
</code></pre><p></p>