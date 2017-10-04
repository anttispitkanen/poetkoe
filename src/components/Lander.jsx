import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Lander.css';

const Lander = () => (
    <div className="Lander">
        <MarkdownParser
            url="text/some-icons.md"
            className="some-icons"
        />

        <div className="main-logo"/>

        <h1>Poetkoe</h1>{/* heading actually hidden */}

        <MarkdownParser
            url="text/tagline.md"
            className="tagline"
        />
    </div>
);

export default Lander;
