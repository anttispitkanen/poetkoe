import React from 'react';
import MarkdownParser from '../MarkdownParser';
import './styles/Footer.css';

const Footer = () => (
    <div className="Footer">
        <MarkdownParser
            url="text/some-icons.md"
            className="some-icons"
        />

        <MarkdownParser
            url="text/copyright.md"
            className="copyright"
        />
    </div>
);

export default Footer;
