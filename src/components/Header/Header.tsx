

import styles from './Header.module.css';
import Navbar from '@/components/Header/Navbar';


const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
