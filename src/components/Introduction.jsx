import React from 'react';
import MarkdownParser from '../MarkdownParser';
import { videoEmbed } from '../videoEmbed';
import './styles/Introduction.css';

const IntroEmbed = videoEmbed({
    url: 'embeds/introduction.md',
    className: 'youtube-embed',
}, {
    origWidth: 300,
    origHeight: 380,
    sideMargin: 20,
    aspectRatio: 1.267
})(MarkdownParser);

const Introduction = () => (
    <div className="Introduction">
        <MarkdownParser
            url="text/introduction-1.md"
            className="introduction"
        />

        <IntroEmbed />

        <MarkdownParser
            url="text/introduction-2.md"
            className="introduction"
        />
    </div>
);

export default Introduction;
