import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/auth/auth-slice";

import styles from "./form.module.scss";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.password.value));
    form.reset();
    navigate("/home-page", { replace: true });
  };
  return (
    <div>
      <form className={styles.root} onSubmit={handleSubmit}>
        <label className={styles.formlabel} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.forminput}
          type="email"
          name="email"
          placeholder="your@email.com"
          min-length="6"
          required
        />
        <label className={styles.formlabel} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.forminput}
          type="password"
          name="password"
          placeholder="Password"
        />
        <div className={styles.allbtn}>
          <button className={`${styles.btn} ${styles.btnmrgin}`} type="submit">
            Log in
          </button>
          <button className={styles.btn} type="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
