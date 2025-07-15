import styles from './Feature.module.scss';
import icon1 from '../assets/images/home/feature-image-01.png';
import icon2 from '../assets/images/home/feature-image-02.png';
import icon3 from '../assets/images/home/feature-image-03.png';
import icon4 from '../assets/images/home/feature-image-04.png';

import bg1 from '../assets/images/home/feature-bg-01.png';
import bg2 from '../assets/images/home/feature-bg-02.png';
import bg3 from '../assets/images/home/feature-bg-03.png';
import bg4 from '../assets/images/home/feature-bg-04.png';

import { FiArrowRight } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const features = [
  {
    title: 'Search Data',
    desc: 'Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.',
    img: icon1,
    bgImage: bg1,
  },
  {
    title: '24 Hours Access',
    desc: 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.',
    img: icon2,
    bgImage: bg2,
  },
  {
    title: 'Print Out',
    desc: 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.',
    img: icon3,
    bgImage: bg3,
  },
  {
    title: 'Security Code',
    desc: 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.',
    img: icon4,
    bgImage: bg4,
  },
];

const FeatureSection = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
  return (
    <section className={styles.featureSection}>
      <div className="wrapper">
        <h2 className={styles.heading}>Features</h2>
        <p className={styles.subheading}>
          Some of the features and advantages that we provide for those of you
          who store data in this Data Warehouse.
        </p>

        <div className={styles.grid}>
          {features.map((item, index) => (
            <div className={styles.card} key={index} 
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-offset="200">
              <div className={styles.bgImage}>
                <img src={item.bgImage} alt="background" />
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.img} alt={item.title} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#" className={styles.link}>
                  Learn more <FiArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
