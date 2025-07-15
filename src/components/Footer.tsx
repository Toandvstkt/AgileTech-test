import styles from './Footer.module.scss';
import logo from '../assets/images/common/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <img src={logo} alt="DataWarehouse logo" />
            <strong>DataWarehouse</strong>
          </div>
          <address>
            Warehouse Society, 234<br />
            Bahagia Ave Street PRBW 29281
          </address>
          <a href="mailto:info@warehouse.project">info@warehouse.project</a>
          <p>1-232-3434 (Main)</p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4>About</h4>
            <ul>
              <li>Profile</li>
              <li>Features</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Help</h4>
            <ul>
              <li>Support</li>
              <li>Sign up</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Social Media</h4>
            <div className={styles.socialIcons}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© Datawarehouse™, 2020. All rights reserved.</p>
        <p>Company Registration Number: 21479524.</p>
      </div>
    </footer>
  );
};

export default Footer;
