import React  from 'react';

import Poster from '../../shared/components/poster';

import styles from './home.css';

export default class Home extends React.Component {
    routeTo = {
            'A': '#/audio',
            'V': '#/video'
        };
    titles = ['A', 'V'];

    constructor(props) {
        super(props);
        this.state = {
            currentPoster: '',
            selected     : false
        }
    }
    componentDidMount() {
        this.setState({currentPoster: this.routeTo.A})
        document.addEventListener('keyup', this.haendler, false)
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.haendler, false)
    }
    haendler = (e) => {
        switch(e.code) {
            case 'Enter':
                this.setState({selected: true})
            break;
            case 'ArrowLeft':
                this.setState({currentPoster: this.routeTo.A})
            break;
            case 'ArrowRight':
                this.setState({currentPoster: this.routeTo.V})
            break;
            default:
            console.info(`Unkown key-code for this context: ${e.code}`);
        }
    }
    render() { 
        const selected = this.state.selected? styles.hide : '';
        return (
            <div key="home" className={`${styles.home} ${selected}`} 
            onAnimationEnd={()=> {location = this.state.currentPoster}}>
                {this.titles.map(item => <Poster 
                    active={this.state.currentPoster === this.routeTo[item]} 
                    key={item}  
                    title={item}/>)}
            </div>
        )
    }
}