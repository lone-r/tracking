import React, { useState } from 'react';

function App() {
    const [trackingNumber, setTrackingNumber] = useState('');

    return (
        <div className="App">
            <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
            <button onClick={() => {}}>Track</button>
        </div>
    );
}

export default App;
