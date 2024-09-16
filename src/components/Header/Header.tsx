import Link from 'next/link';
import styles from './Header.module.css';
import Navbar from '@/components/Header/Navbar';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <div className={styles.auth}>
        <Link href={'/login'} className={styles.login}>
          Login
        </Link>
        <Link href={'/register'} className={styles.register}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
