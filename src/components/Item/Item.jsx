import Top from '../../../public/img/icon/top.svg';
import Security from '../../../public/img/icon/security.svg';
import Procent from '../../../public/img/icon/procent.svg';
import Prize from '../../../public/img/icon/prize.svg';
import Like from '../../../public/img/icon/like.svg';
import Icon from '../icon/icon';
import styles from './Item.module.scss';
import Descrioption from '../Description/Description';

function Item({ image, rating, quantity, name, type, prise }) {
  const iconList = [
    {
      id: 1,
      name: 'top',
      image: Top,
    },
    {
      id: 2,
      name: 'security',
      image: Security,
    },
    {
      id: 3,
      name: 'procent',
      image: Procent,
    },
    {
      id: 4,
      name: 'prize',
      image: Prize,
    },
    {
      id: 5,
      name: 'like',
      image: Like,
    },
  ];
  return (
    <div className={styles.card}>
      <div className={styles.card_img_and_ul}>
        <ul className={styles.ul}>
          {iconList.map((i, index) => (
            <Icon id={index} image={i.image} name={i.name} key={index} />
          ))}
        </ul>
        <div className={styles.card_image_div}>
          <img className={styles.card_image} src={image} alt="" />
        </div>
      </div>
      <Descrioption
        rating={rating}
        quantity={quantity}
        name={name}
        type={type}
        prise={prise}
      />
    </div>
  );
}
export default Item;
