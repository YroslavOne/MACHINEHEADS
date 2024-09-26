import { useState } from 'react';
import styles from './Cart.module.scss';
import Minus from '../../../public/img/cart/minus.svg'
import Plus from '../../../public/img/cart/plus.svg'

function Cart() {
  const [goodsQuantity, setGoodsQuantity] = useState(4);
  const addValue = () => {
		setGoodsQuantity(goodsQuantity+1);
		console.log(goodsQuantity);
	};
	const subtractValue = () => {
		if (goodsQuantity!==0){
setGoodsQuantity(goodsQuantity-1);
		} 
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cart_number}>
        <button onClick={subtractValue} className={styles.cart_number_button}>
          <img
            className={styles.cart_number_input_img}
            src={Minus}
            alt="minus"
          />
        </button>
        <input
          size={1}
          className={styles.cart_number_input}
          type="number"
          value={goodsQuantity}
          onChange={(e) => setGoodsQuantity(Number(e.target.value))}
        />
        <button onClick={addValue} className={styles.cart_number_button}>
          <img className={styles.cart_number_input_img} src={Plus} alt="plus" />
        </button>
      </div>
      <button className={styles.cart_add}>В корзину</button>
      <button className={styles.cart_favorites}></button>
    </div>
  );
}
export default Cart;
