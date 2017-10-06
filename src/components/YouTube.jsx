import React from 'react';
import MarkdownParser from '../MarkdownParser';
import { videoEmbed } from '../videoEmbed';
import './styles/YouTube.css';

const YoutubeEmbed = videoEmbed({
    url: 'embeds/youtube.md',
    className: 'youtube-embed'
}, {
    origWidth: 450,
    origHeight: 253.125,
    sideMargin: 20,
    aspectRatio: 0.5625
})(MarkdownParser);

const YouTube = () => (
    <div className="YouTube">
        <MarkdownParser
            url="text/youtube.md"
            className="youtube"
        />

        <YoutubeEmbed />
    </div>
);

export default YouTube;
