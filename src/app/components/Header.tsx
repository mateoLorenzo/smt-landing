import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home">SM Technologies</a>
        </div>

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#what-we-do">About</a>
          <a href="#how-we-work">How we work</a>
          <a href="#products-platforms">Our products</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaButton}>
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
