import styles from "./skill.module.scss";
import php from "../../assets/php.png";
import html from "../../assets/html.png";
import sql from "../../assets/mysql.png";
import react from "../../assets/physics.png";
import js from "../../assets/js.png";
import scss from "../../assets/scss.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Skill() {
  return (
    <>
      <div className={styles.bigcontainer}>
            <p className={styles.textskill}>Skills that I have</p>
        <div className={styles.container}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={4}
            navigation
            speed={2000}
          >
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={php} alt="PHP" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={html} alt="HTML" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={sql} alt="SQL" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={react} alt="React" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={js} alt="js" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.skill}>
                <img src={scss} alt="scss" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Skill;
