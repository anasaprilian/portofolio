import styles from "./people.module.scss";
import img from "../../assets/hero2.png";

function People() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.textleft}>
            <div className={styles.textname}>
              <span>I'm</span>
              <span className={styles.textname2}>Anas Aprilian Tri Yahya</span>
            </div>
          </div>
          <span className={styles.texttitle}>
            I am Anas Aprilian Tri Yahya from Jakarta, 22 years old and a
            student at Telkom University majoring in information systems. I am a
            person who likes to read, doesn't give up easily, is a hard worker,
            and always cares about the environment around me
          </span>
        </div>
        <div className={styles.image}>
          <img src={img} className={styles.imagehero} />
        </div>
        <div className={styles.profile}>
          <span className={styles.texttitle2}>
            I am currently continuing my Bachelor of Information Systems
            education at Telkom University after graduating from D3 Information
            Systems last year
          </span>
        </div>
      </div>
    </>
  );
}

export default People;
