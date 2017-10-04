import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Filler.css';

const Filler = ({ textSource, quotedPerson }) => (
    <div className={'Filler ' + quotedPerson}>
        <MarkdownParser
            url={`/quotes/${textSource}`}
            className="quote"
        />
    </div>
);

export default Filler;
