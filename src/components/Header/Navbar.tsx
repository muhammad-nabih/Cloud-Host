'use client';
import Link from 'next/link';
import { GrTechnology } from 'react-icons/gr';
import styles from './Header.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <nav className={styles.nav}>
      <div data-logo="CLOUD-HOST">
        <Link href="/" className={styles.logo}>
          CLOUD
          <span>
            <GrTechnology />
          </span>
          HOSTING
        </Link>

        <div className={styles.iconMenu}>{showMenu ? <IoMdClose onClick={() => setShowMenu((prev) => !prev)} /> : <AiOutlineMenu onClick={() => setShowMenu((prev) => !prev)} />}</div>
      </div>

      <div
        className={styles.navbarWrapper}
        style={{
          clipPath: (showMenu && 'polygon(0 0, 100% 0, 100% 100%, 0 100%') || '',
        }}
      >
        <ul className={styles.menu}>
          <li>
            <Link onClick={() => setShowMenu(false)} href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href={'/about'}>
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href={'/articles'}>
              Articles
            </Link>
          </li>
          <li>
            <Link onClick={() => setShowMenu(false)} href={'/admin'}>
              Admin Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
