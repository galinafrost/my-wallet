import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/aut-slice";

const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>User Menu</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
