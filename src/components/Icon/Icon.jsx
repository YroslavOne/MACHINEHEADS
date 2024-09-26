import styles from './Icon.module.scss';
import React from 'react';

function Icon({ image, id, name }) {
  return (
    <li className={styles.li} key={id}>
      <img src={image} alt={name} />
    </li>
  );
}
export default Icon;
