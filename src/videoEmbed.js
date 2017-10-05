import React, { Component } from 'react';

export const videoEmbed = (props, size) => WrappedComponent => (
    class extends Component {
        constructor() {
            super();
            this.state = {
                height: null,
                width: null
            }
        }

        // set dimensions when mounting or resizing
        componentDidMount() {
            this.calculateDimensions();
            window.addEventListener('resize', () => {
                this.calculateDimensions();
            });
        }

        calculateDimensions = () => {
            // manually calculate embed dimensions to keep aspect ratio on resize
            const { origWidth, origHeight, sideMargin, aspectRatio } = size;

            const width = window.innerWidth - (sideMargin * 2);
            const height = aspectRatio * width;
            this.setState({
                width: width > origWidth ? origWidth : width,
                height: height > origHeight ? origHeight : height
            });
        }

        render() {
            return (
                <WrappedComponent
                    style={{
                        height: this.state.height + 'px',
                        width: this.state.width + 'px'
                    }}
                    {...props}
                />
            )
        }
    }
);
