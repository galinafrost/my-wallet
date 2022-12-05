import ButtonGoogle from "../ButtonGoogle";

import styles from "./loginform.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>You can log in with your Google Account:</p>
      <ButtonGoogle />
      <p className={`${styles.text} ${styles.textlog} `}>
        Or log in using an email and password, after registering:
      </p>
    </div>
  );
};

export default LoginForm;
