import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/aut-slice";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.password.value));
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email"></label>
      <input type="email" name="email" /> */}
      {/* <label htmlFor="password"></label> */}
      <input type="text" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Form;
