import styles from './Hero.module.scss';
import heroImage from '../assets/images/home/hero-image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section className={styles.hero}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                Save your data storage here.
                </h1>
                <p className={styles.description}>
                Data Warehouse is a data storage area that has been tested for security, 
                so you can store your data here safely but not be afraid of being stolen by others.
                </p>
                <button className={styles.button}>Learn more</button>
            </div>
            <figure className={styles.imageWrapper}>
                <img src={heroImage} alt="Hero Illustration" />
            </figure>
        </div>
    </section>
  );
};

export default Hero;
