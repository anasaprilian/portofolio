import styles from "./people2.module.scss";
import asyt from "../../assets/asyt.png";
import smp from "../../assets/267.png";
import telyu from "../../assets/telyu.png";
import smk from "../../assets/smk.png";
import olim from "../../assets/olim.png";
import hastja from "../../assets/hastja.png";
import bem from "../../assets/bemfit.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

function People2() {
  return (
    <>
      <div className={styles.bigcontainer}>
        <p className={styles.experience}>Education & Experience</p>
        <div className={styles.container}>
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={3}
            speed={2000}
            autoplay={{ delay: 1000 }}
            spaceBetween={100}
          >
            <SwiperSlide>
            <div className={styles.card}>
                <div className={styles.image}>
                  <img src={smp} alt="" />
                </div>
                <p>JUNIOR HIGH SCHOOL 267 JAKARTA</p>
                <p>2014-2017</p>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={olim} alt="" />
                </div>
                <p>OLIMPIADE TELKOM</p>
                <p>Tools and Equipment Team (2021)</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={smk} alt="" />
                </div>
                <p>SENIOR HIGH SCHOOL TELKOM JAKARTA</p>
                <p>SOFTWARE ENGINEERING (2017-2020)</p>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={hastja} alt="" />
                </div>
                <p>Himpunan Alumni Smk Telkom Jakarta </p>
                <p>Public Relations (2021-2022)</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={telyu} alt="" />
                </div>
                <p>TELKOM UNIVERSITY</p>
                <p>D3 Information System (2020-2033)</p>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={bem} alt="" />
                </div>
                <p>STUDENT EXECUTIVE BOARD FAKULTAS ILMU TERAPAN</p>
                <p>Social and Community (2022-2023)</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={telyu} alt="" />
                </div>
                <p>TELKOM UNIVERSITY</p>
                <p>S1 Information System (2023-Present)</p>
              </div>
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={asyt} alt="" />
                </div>
                <p>PT. AERO SYSTEM (Asyst)</p>
                <p>Application Managed Service(Intership)</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default People2;
