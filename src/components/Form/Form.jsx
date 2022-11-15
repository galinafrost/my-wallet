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
    <div>
      <p>You can log in with your Google Account:</p>
      <button type="button">Google</button>
      <p>Or log in using an email and password, after registering:</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="your@email.com" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Log in</button>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Form;
