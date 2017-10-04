import React from 'react';

import Lander from './components/Lander';
import Filler from './components/Filler';

const App = () => (
    <div className="App">
        <Lander />
        <Filler
            textSource="einstein.md"
            quotedPerson="einstein"
        />
        <Filler
            textSource="adams.md"
            quotedPerson="adams"
        />
        <Filler
            textSource="nietzsche.md"
            quotedPerson="nietzsche"
        />
        <Filler
            textSource="beethoven.md"
            quotedPerson="beethoven"
        />
    </div>
);

export default App;
