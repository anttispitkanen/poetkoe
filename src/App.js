import React from 'react';

import Filler from './components/Filler';
import Lander from './components/Lander';
import SoundCloud from './components/SoundCloud';
import Introduction from './components/Introduction';

const App = () => (
    <div className="App">
        <Lander />

        <Introduction />

        <Filler
            textSource="einstein.md"
            quotedPerson="einstein"
        />

        <SoundCloud />

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
