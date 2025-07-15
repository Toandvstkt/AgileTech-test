import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/common/logo.png';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // icon burger

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiresAt');
    setIsLoggedIn(false);
    navigate('/signin');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.wrapper}>
          <a href="#">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>

          {/* Desktop buttons */}
          <div className={styles.authButtons}>
            {isLoggedIn ? (
              <>
                <button className={styles.signInBtn} onClick={() => navigate('/profile')}>
                  Profile
                </button>
                <button className={styles.signInBtn} onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <button className={styles.signInBtn} onClick={() => navigate('/signin')}>
                Sign In
              </button>
            )}
          </div>

          {/* Mobile burger */}
          <div className={styles.burger} onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            {isLoggedIn ? (
              <>
                <button onClick={() => { navigate('/profile'); setIsMenuOpen(false); }}>
                  Profile
                </button>
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }}>
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => { navigate('/signin'); setIsMenuOpen(false); }}>
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
