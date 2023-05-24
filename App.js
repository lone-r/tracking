import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingInfo, setTrackingInfo] = useState(null);

    const trackPackage = async () => {
        const response = await axios.get(`https://api.tracking.com/${trackingNumber}`);
        setTrackingInfo(response.data);
    };

    return (
        <div className="App">
            <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
            <button onClick={trackPackage}>Track</button>
            {trackingInfo && <div>{/* Display tracking info here */}</div>}
        </div>
    );
}

export default App;
