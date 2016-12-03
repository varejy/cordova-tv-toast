import React, { Component }  from 'react';
import styles from './layout.css';
export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('Toast: ', toast)
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Hello, world!</h1>
        {children}
      </div>
    )
  }
}

