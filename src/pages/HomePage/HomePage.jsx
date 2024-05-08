import DocTitle from "../../components/DocTitle";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css"

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/contacts");
    } else {
      navigate("/login");
    }
  };

  return (
    <main className={style.mainContainer}>
      <DocTitle>Home</DocTitle>
      <h1>Phonebook App</h1>
      <p>Manage your contacts easily!</p>
      <button
        type="button"
        className={style.mainBtn}
        onClick={handleClick}
      >
        Let`s try
      </button>
    </main>
  );
};

export default HomePage;
