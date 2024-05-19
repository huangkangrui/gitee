import React from 'react';

import styles from './index.less';

const Component = ({ children }) => {
  return (<div className={styles.wrapper}>
    {children}
  </div>);
};

export default Component;
