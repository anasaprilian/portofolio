import styles from "./contact.module.scss";
import phone from '../../assets/phone.png';
import {
    EnvelopeIcon,
    PhoneIcon,
    Square2StackIcon,
  } from '@heroicons/react/24/outline';

function Contact() {
        const copyToClipboard = (text) => {
          navigator.clipboard.writeText(text);
        };
  return (
    <>
      <div className={styles.containerContact}>
        <div className={styles.contact}>
          <p>Contact</p>
          <div className={styles.email}>
            <img src={phone} alt=""/>
            <p>anasaprilian267@gmail.com</p>
            <Square2StackIcon
              onClick={() => copyToClipboard('anasaprilian267@gmail.com')}
              className={styles.squareIcon}
            />
          </div>
          <div className={styles.phone}>
            <img src={phone} alt=""/>
            <p>+6285693011549</p>
            <Square2StackIcon
              onClick={() => copyToClipboard('+6285693011549')}
              className={styles.squareIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
