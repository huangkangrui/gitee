import React from 'react';

import styles from './index.less'

const Component = ({ children }) => {
  return <div className={styles.wrapper}>
    <img src={require('./images/bg-left.png')} className="bg-left" />
    <img src={require('./images/bg-right.png')} className="bg-right" />
    {children}
  </div>
}

export default Component