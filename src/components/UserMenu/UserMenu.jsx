import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/auth-slice";

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>User Menu</p>
      <button type="button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
