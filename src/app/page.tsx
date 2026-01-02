import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <section className={styles.section} id="home">
          <h1>Home</h1>
        </section>

        <section className={styles.section} id="what-we-do">
          <h1>What we do</h1>
        </section>

        <section className={styles.section} id="how-we-work">
          <h1>How we work</h1>
        </section>

        <section className={styles.section} id="products-platforms">
          <h1>Products & Platforms</h1>
        </section>

        <section className={styles.section} id="our-vision">
          <h1>Our vision</h1>
        </section>

        <section className={styles.section} id="lets-build">
          <h1>Lets build something real</h1>
        </section>

        <section className={styles.section} id="contact">
          <h1>Contact us</h1>
        </section>
      </div>
    </>
  );
}
