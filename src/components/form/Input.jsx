import styles from "./Input.module.css";
import searchIcon from  "../../assets/images/search.png"

function Input({ registerProps, id, placeholder }) {
  return (
    <div className={styles.inputContainer}>
      <img src={searchIcon} alt="Search" className={styles.icon} />
      <input
        type="text"
        placeholder={placeholder}
        {...registerProps}
        className={styles.input}
      />
    </div>
  );
}

export default Input;
