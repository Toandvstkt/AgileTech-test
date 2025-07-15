import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Testimonial.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'John Fang',
    website: 'wordfaang.com',
    avatar: 'https://i.pravatar.cc/100?img=1',
    content:
      'Suspendisse ultrices at diam lectus nullam. <br>Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    website: 'janedoe.dev',
    avatar: 'https://i.pravatar.cc/100?img=2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptate molestias corrupti nisi hic deserunt quos, at harum ratione cum!',
  },
  {
    id: 3,
    name: 'Alex Smith',
    website: 'alexsmith.io',
    avatar: 'https://i.pravatar.cc/100?img=3',
    content:
      'Aliquam erat volutpat. Sed eu risus nec dui convallis malesuada. Morbi at lacus nec justo vestibulum facilisis.',
  },
];

const TestimonialSlider = () => {
  return (
    <section className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.navigation}>
        <button className={`swiper-button-prev ${styles.navButton}`}>
          <img src="/arrow-icon.png" alt="Prev" className={styles.arrow} />
        </button>
        <button className={`swiper-button-next ${styles.navButton}`}>
          <img src="/arrow-icon.png" alt="Next" className={`${styles.arrow} ${styles.next}`} />
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <div className={styles.user}>
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <a
                    href={`https://${item.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.website}
                  </a>
                  <p
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
