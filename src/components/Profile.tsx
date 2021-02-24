import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/matheusmirandaferreira.png"
        alt="Matheus de Miranda"
      />
      <div>
        <strong>Matheus de Miranda</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
