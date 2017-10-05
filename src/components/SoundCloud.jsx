import React from 'react';
import MarkdownParser from '../MarkdownParser';
import { videoEmbed } from '../videoEmbed';
import './styles/SoundCloud.css';

const SoundCloudEmbed = videoEmbed({
    url: 'embeds/soundcloud.md',
    className: 'soundcloud-embed'
}, {
    origWidth: 350,
    origHeight: 350,
    sideMargin: 20,
    aspectRatio: 1
})(MarkdownParser);

const SoundCloud = () => (
    <div className="SoundCloud">
        <SoundCloudEmbed />

        <MarkdownParser
            url="text/soundcloud.md"
            className="soundcloud"
        />
    </div>
);

export default SoundCloud;
