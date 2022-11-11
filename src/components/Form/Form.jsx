import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/auth/auth-slice";

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
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="email"></label>
      <input type="email" name="email" /> */}
      {/* <label htmlFor="password"></label> */}
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default Form;
