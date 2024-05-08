import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors"
import {logout} from "../../redux/auth/operations"
import style from "./UserMeny.module.css"

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.wrapper}>
      <p>Welcome, {user.name}</p>
      <button
        type="button"
        className={style.logOutBtn}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
