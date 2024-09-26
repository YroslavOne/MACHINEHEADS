import React, { useRef, useState } from 'react';
import Item from '../Item/Item';
import styles from './Slider.module.scss';
import { itemList } from '../../ItemList';
import Left from '../../../public/img/slider/left.png';
import Right from '../../../public/img/slider/right.png';
import ButtonScroll from '../ButtonScroll/ButtonScroll';

function Slider() {
  const sliderRef = useRef(null);

  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const computedStyle = getComputedStyle(sliderRef.current);
      const step = parseInt(computedStyle.gap) || 20;
      const elementWidth = sliderRef.current.children[0].offsetWidth + step;
      sliderRef.current.scrollBy({
        left: -elementWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const computedStyle = getComputedStyle(sliderRef.current);
      const step = parseInt(computedStyle.gap) || 20;
      const elementWidth = sliderRef.current.children[0].offsetWidth + step;
      sliderRef.current.scrollBy({
        left: elementWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const deltaX = startX - endX;
    const swipeThreshold = 100;

    if (deltaX > swipeThreshold) {
      scrollRight();
    } else if (deltaX < -swipeThreshold) {
      scrollLeft();
    } else {
    }
  };

  return (
    <div className={styles.container_slider}>
      <h2 className={styles.h2}>Хиты продаж</h2>
      <div className={styles.container_slider_wrapper}>
        <div
          className={styles.slider}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {itemList.map((i, index) => (
            <Item
              image={i.image}
              rating={i.rating}
              quantity={i.quantity}
              name={i.name}
              type={i.type}
              key={index}
              prise={i.prise}
            />
          ))}
        </div>
        <div className={styles.container_button_slider}>
          <div className={styles.container_button_slider_scroll}>
            <ButtonScroll
              image={Left}
              marginLeft={'0px'}
              marginRight={'1px'}
              onClick={scrollLeft}
            />
            <ButtonScroll
              image={Right}
              marginLeft={'1px'}
              marginRight={'0px'}
              onClick={scrollRight}
            />
          </div>
          <button className={styles.container_button_slider_button}>
            Смотреть все
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
