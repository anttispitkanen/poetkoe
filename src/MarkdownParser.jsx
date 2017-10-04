import React, { Component } from 'react';
import marked from 'marked';
import PropTypes from 'prop-types';
const CMS_URL = 'https://raw.githubusercontent.com/anttispitkanen/poetkoe-content/master/';

class MarkdownParser extends Component {
    constructor(props) {
        super(props);
        this.parseMarkdown = this.parseMarkdown.bind(this);
        this.state = {
            fetchedMarkdown: '',
            error: null
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch(CMS_URL + this.props.url);
            const text = await response.text();
            this.setState({ fetchedMarkdown: text });
        } catch (e) {
            console.error(e);
            this.setState({ error: e });
        }
    }

    parseMarkdown() {
        return { __html: marked(this.state.fetchedMarkdown) };
    }

    render() {
        if (this.state.error) {
            return <div className={this.props.classNameProp}>Oops, see console for what went wrong!</div>;
        }

        if (!this.state.fetchedMarkdown) {
            return <div className={this.props.classNameProp}>Fetching content...</div>;
        }

        return (
            <div
                dangerouslySetInnerHTML={this.parseMarkdown()}
                className={this.props.classNameProp}
                style={this.props.style}
            />
        );
    }
}

MarkdownParser.propTypes = {
    classNameProp: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default MarkdownParser;
