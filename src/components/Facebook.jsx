import React from 'react';
import MarkdownParser from '../MarkdownParser';
import { videoEmbed } from '../videoEmbed';
import './styles/Facebook.css';

const FacebookEmbed = videoEmbed({
    url: 'embeds/facebook.md',
    className: 'facebook-embed'
}, {
    origWidth: 400,
    origHeight: 224,
    sideMargin: 20,
    aspectRatio: 0.56
})(MarkdownParser);

const Facebook = () => (
    <div className="Facebook">
        <FacebookEmbed />

        <MarkdownParser
            url="text/facebook.md"
            className="facebook"
        />
    </div>
);

export default Facebook;
