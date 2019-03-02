import React from 'react';
import styles from './page-container.module.scss'

const PageContainer = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default PageContainer;
