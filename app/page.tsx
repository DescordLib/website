import styles from '../styles/Home.module.css';
import { FaGithub, FaDiscord, FaExternalLinkAlt } from 'react-icons/fa';

export default function Home() {
  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '2rem',
  };

  const descriptionStyle = {
    fontSize: '1.5rem',
    marginBottom: '4rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };

  return (
    <div style={{ textAlign: 'center', width: '100%', height: '100%', paddingTop: '5%' }}>
      <h1 style={headingStyle}>Descord</h1>
      <p style={descriptionStyle}>
        Descord is a minimal Rust library that provides a simple and
        efficient way to interact with the Discord API.
      </p>
      <div style={buttonContainerStyle}>
        <a href="https://doc.rust-lang.org/nightly/" className={`${styles.button} ${styles.docsButton}`}>
          Docs <FaExternalLinkAlt />
        </a>
        <a href="https://github.com/DescordLib/descord" className={styles.button}>
          GitHub <FaGithub />
        </a>
        <a href="https://discord.gg/gpZ8UqVMBH" className={styles.button} style={{ marginRight: '0' }}>
          Discord Server <FaDiscord />
        </a>
      </div>
    </div>
  );
}