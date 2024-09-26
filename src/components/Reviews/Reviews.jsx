import React from 'react';
import styles from './Reviews.module.scss';
import StarOff from '../../../public/img/reviews/StarOff.svg';
import StarOn from '../../../public/img/reviews/StarOn.svg';

function Reviews({ rating, quantity }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <li key={i} className={styles.stars}>
      <img className={styles.stars_image} src={i < rating ? StarOn : StarOff} />
    </li>
  ));

  return (
    <div className={styles.reviews}>
      <ul className={styles.starList}>{stars}</ul>
      <p className={styles.reviews_text}>{quantity} отзывов</p>
    </div>
  );
}

export default Reviews;
