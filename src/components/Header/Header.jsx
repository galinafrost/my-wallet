//Components
import Logo from "../Logo";
//Styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <Logo />
    </header>
  );
};

export default Header;
