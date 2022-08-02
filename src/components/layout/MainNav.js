import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>❤️</div>
      <nav>
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;
