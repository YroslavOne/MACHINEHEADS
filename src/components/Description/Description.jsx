import Cart from '../Cart/Cart';
import Reviews from '../Reviews/Reviews';
import styles from './Description.module.scss';

function Descrioption({ rating, quantity, name, type, prise }) {
  return (
    <div className={styles.description}>
      <div className={styles.description_detailed}>
        <h4 className={styles.description_detailed_h4}>{name}</h4>
        <Reviews rating={rating} quantity={quantity} />
        <ul className={styles.description_detailed_type}>
          {type.map((t, index) => (
            <li key={index} className={styles.description_detailed_type_li}>
              <img
                className={styles.description_detailed_type_li_img}
                src={t.image}
                alt={t.name}
              />
              {t.name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.description_prise_and_cart}>
        <div className={styles.description_prise}>
          <div className={styles.description_prise_old}> {prise.old} ₽</div>
          <div className={styles.description_prise_new}>{prise.new} ₽</div>
        </div>
        <Cart />
        <button className={styles.description_buy}>Купить в 1 клик</button>
      </div>
    </div>
  );
}
export default Descrioption;
