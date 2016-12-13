import React from 'react';

export default class Audio extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        document.addEventListener('keyup', this.handler, false);
        this.media = toast.Media.getInstance();
        this.media.open('https://psv4.vk.me/c613825/u4687931/audios/6e6069f72a2c.mp3');
        const audio = this.media.getContainerElement();
        audio.style.margin = '2rem auto';
        audio.style.width  = '47%';
        audio.style.height = '50vh';
        audio.querySelector('video').setAttribute('controls','controls');
        this.refs.audio.appendChild(audio);
        this.media.play();
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.handler, false);
        this.media.stop();
    }
    handler(e) {
        switch(e.code) {
            case 'Escape':
                location = '#/'
            break;
            default:
            break;
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ marginLeft: '3rem' }}>>Audio: -->  <i>for exit press Esc key</i></h1>
                <div ref="audio"></div>
            </div>
        )
    }
}