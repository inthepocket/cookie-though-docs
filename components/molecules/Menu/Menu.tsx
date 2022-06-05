import styles from './Menu.module.css';

import Footer from '@molecules/Footer';

const Menu = () => {
  return (
    <div className={`menu ${styles.menu}`}>
      <ul>
        <li>Docs</li>
      </ul>
      <Footer />
    </div>
  );
};

export default Menu;
