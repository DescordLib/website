import styles from '../styles/Home.module.css';
import { FaGithub, FaDiscord, FaExternalLinkAlt } from 'react-icons/fa';
import Terminal from '@/components/Terminal';


export default function Home() {
  const headingStyle = {
    fontSize: '5rem',
    marginBottom: '3rem',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    marginBottom: '3rem',
    color: 'lightgray',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };

  return (
    <div style={{ textAlign: 'center', width: '100%', height: '100%', paddingTop: '3%' }}>
      <h1 style={headingStyle}>Descord</h1>
      <p style={descriptionStyle}>
        Descord is a minimal Rust library that provides a simple and efficient way to interact with the Discord API.<br />
        It requires so little boilerplate compared to other Rust Discord API wrappers, making it incredibly intuitive and easy to use.<br />
        Its straightforward design ensures developers can quickly integrate Discord functionalities into their applications without the complexity often associated with similar libraries.
      </p>
      <div style={buttonContainerStyle}>
        <a href="https://docs.rs/descord/latest/descord" className={`${styles.button} ${styles.docsButton}`} target="_blank" rel="noopener noreferrer">
          Docs <FaExternalLinkAlt />
        </a>
        <a href="https://github.com/DescordLib/descord" className={styles.button} target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub />
        </a>
        <a href="https://discord.gg/gpZ8UqVMBH" className={styles.button} style={{ marginRight: '0' }} target="_blank" rel="noopener noreferrer">
          Discord Server <FaDiscord />
        </a>
      </div>
      <Terminal />
    </div>
  );
}