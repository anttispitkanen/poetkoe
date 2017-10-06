import React from 'react';

import Filler from './components/Filler';
import Lander from './components/Lander';
import Introduction from './components/Introduction';
import SoundCloud from './components/SoundCloud';
import Footer from './components/Footer';

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

        <Footer />
    </div>
);

export default App;
