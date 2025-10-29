
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";



import home from "../../assets/images/home.png"
import homeSel from "../../assets/images/home_selected.png";
import save from "../../assets/images/save.png";
import saveSel from "../../assets/images/save_selected.png";
import config from "../../assets/images/config.png";
import configSel from "../../assets/images/config_selected.png";
import book from "../../assets/images/book.png";
import bookSel from "../../assets/images/book_selected.png";
import logo from "../../assets/images/logo.png";

function IconLink({ to, alt, defaultImg, selectedImg }) {
  return (
    <NavLink to={to} className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
      <img
        src={({}).isActive ? selectedImg : defaultImg}
        alt={alt}
        className={styles.icon}
      />
    </NavLink>
  );
}

function Sidebar() {
  return (
    <aside className={styles.container} aria-label="Sidebar principal">

      <div className={styles.top}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
      </div>

      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          {({ isActive }) => <img src={isActive ? homeSel : home} alt="Home" className={styles.icon} />}
        </NavLink>

        <NavLink to="/explorar" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          {({ isActive }) => <img src={isActive ? bookSel : book} alt="Explorar" className={styles.icon} />}
        </NavLink>

        <NavLink to="/salvos" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          {({ isActive }) => <img src={isActive ? saveSel : save} alt="Salvos" className={styles.icon} />}
        </NavLink>

        <NavLink to="/config" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          {({ isActive }) => <img src={isActive ? configSel : config} alt="Config" className={styles.icon} />}
        </NavLink>
      </nav>

    </aside>
  );
}

export default Sidebar;
