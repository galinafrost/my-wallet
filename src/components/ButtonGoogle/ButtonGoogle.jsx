import GoogleLogo from "../../img/btn-google.svg";

import styles from "./buttongoogle.module.scss";

const ButtonGoogle = () => {
  return (
    <button className={styles.btngoogle} type="button">
      <img className={styles.logoGoogle} src={GoogleLogo} alt="Google logo" />
      Google
    </button>
  );
};

export default ButtonGoogle;
