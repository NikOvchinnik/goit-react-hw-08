import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css"
import DocTitle from "../../components/DocTitle";

const NotFoundPage = () => {
  return (
    <div className={style.containerNotFoundPage}>
      <DocTitle>NotFound</DocTitle>
      <h2>Oops, this page is not found</h2>
      <Link to="/" className={style.btnNotFoundPage}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
