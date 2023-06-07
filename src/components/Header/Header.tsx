import { Logo } from "./assets/svg";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__logo}>
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          <Logo />
        </a>
      </div>
    </div>
  );
};

export default Header;
