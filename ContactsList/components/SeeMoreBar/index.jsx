import React, { PropTypes } from 'react';
import styles from './styles.css'

const SeeMoreBar = ({onClickHandler}) =>
  <div className={styles.seemore} onClick={onClickHandler}>
    See More
  </div>

export default SeeMoreBar;
