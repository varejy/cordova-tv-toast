import React from 'react';

export default class Video extends React.Component {
    constructor(props) {
        super(props)
    }

     componentDidMount() {
        document.addEventListener('keyup', this.handler, false);
        this.media = toast.Media.getInstance();
        this.media.open('http://media.w3.org/2010/05/sintel/trailer.mp4');
        const film = this.media.getContainerElement();
        film.style.margin = '2rem auto';
        film.style.width  = '47%';
        film.style.height = '50vh';
        film.querySelector('video').setAttribute('controls','controls');
        this.refs.video.appendChild(film);
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
                <h1 style={{marginLeft: '3rem'}}>>Video: -->  <i>for exit press Esc key</i></h1>
                <div ref="video"></div>
            </div>
        )
    }
}