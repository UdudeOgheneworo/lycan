import Image from "next/image";
import styles from "../styles/page.module.css";
import Header from "../app/header";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Main() {
  return (
    <main className={styles.homeMain}>
      <section className={styles.homeOne}>
        <h1 className={styles.intro}> so, you want to travel to</h1>
        <h2 className={styles.space}> space</h2>
        <p className={styles.talk}>
          let's face it: if you want to go to spaced, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back and relax because we'll give you a truly out of this
          world experience!
        </p>
      </section>
      <section className={styles.explore}>explore</section>
    </main>
  );
}
