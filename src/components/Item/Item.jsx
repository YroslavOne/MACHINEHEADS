import Icon from '../icon/icon';
import styles from './Item.module.scss';
import Descrioption from '../Description/Description';

function Item({ image, rating, quantity, name, type, prise, iconList }) {
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
