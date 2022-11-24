import Form from "../Form";
import LoginForm from "../LoginForm";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <main>
      <div className={styles.root}>
        <h1 className={styles.title}>My Wallet</h1>
        <p className={styles.text}>Smart Finance</p>
        <LoginForm />
        <Form />
      </div>
    </main>
  );
};

export default Main;
