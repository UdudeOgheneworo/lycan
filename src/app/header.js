import styles from "../styles/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/assets/shared/logo.svg" alt="logo" className={styles.logo} />
      <div className={styles.line}></div>
      <div className={styles.menu}>
        <div className={styles.navIcon}>
          <img src="/assets/shared/icon-hamburger.svg" alt="menu open icon" />
          <img src="/assets/shared/icon-close.svg" alt="menu close icon" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span className={styles.number}>00</span> HOME
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.number}>01</span> DESTINATION
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.number}>02</span> CREW
              </a>
            </li>
            <li>
              <a href="#">
                <span className={styles.number}>03</span> TECHNOLOGY
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
