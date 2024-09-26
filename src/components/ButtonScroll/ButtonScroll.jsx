import styles from './ButtonScroll.module.scss';

function ButtonScroll({ image, marginLeft, marginRight, onClick }) {
  return (
    <button className={styles.button_scroll} onClick={onClick}>
      <img
        className={styles.button_scroll_image}
        style={{ marginRight: marginRight, marginLeft: marginLeft }}
        src={image}
      />
    </button>
  );
}
export default ButtonScroll;
